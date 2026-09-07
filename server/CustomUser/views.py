# views.py
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from django.contrib.auth import logout as django_logout
# from .serializers import UserSerializer, UserRegisterSerializer, UserLoginSerializer
# from .models import CustomUser
from .serializers import (
    UserSerializer,
    UserRegisterSerializer,
    UserLoginSerializer,
    ChangePasswordSerializer,
    SendResetOTPSerializer,
    ResetPasswordSerializer,
)

from .models import CustomUser

from .utils import (
    generate_otp,
    save_otp,
    delete_otp,
)

from django.db import transaction
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .sms_service import send_sms


def authenticate_user(email=None, password=None):
    try:
        user = CustomUser.objects.get(email=email)
        if user.check_password(password):
            return user
    except CustomUser.DoesNotExist:
        return None


class AllUsersView(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class AllowUnauthenticatedForLogout(BasePermission):
    def has_permission(self, request, view):
        # Allow unauthenticated requests only for the logout endpoint
        if request.method == 'POST' and view.__class__.__name__ == 'UserLogoutAPIView':
            return True
        # For other endpoints, require authentication
        authentication_classes = getattr(view, 'authentication_classes', [])
        for auth_class in authentication_classes:
            if isinstance(auth_class(), JWTTokenUserAuthentication):
                return request.user and request.user.is_authenticated
        return False


class CurrentUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserRegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate_user(
            email=serializer.validated_data['email'], password=serializer.validated_data['password'])
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserLogoutAPIView(APIView):
    permission_classes = [IsAuthenticated, AllowUnauthenticatedForLogout]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            # Invalidate Django session
            django_logout(request)

            return Response({"message": "Successfully logged out."}, status=status.HTTP_205_RESET_CONTENT)
        except KeyError:
            return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


# staff and superuser
class StaffAndSuperuserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate_user(
            email=serializer.validated_data['email'], password=serializer.validated_data['password'])
        if user and (user.is_superuser or user.is_staff): 
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid credentials or not authorized'}, status=status.HTTP_401_UNAUTHORIZED)


# ==== Change Password API ====
class ChangePasswordAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = ChangePasswordSerializer(
            data=request.data,
            context={
                'request': request
            }
        )

        if not serializer.is_valid():

            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        user = request.user

        new_password = serializer.validated_data[
            'new_password'
        ]

        user.set_password(new_password)
        user.save(
            update_fields=[
                'password',
                'updated_at'
            ]
        )

        return Response(
            {
                'success': True,
                'message':
                    'Password changed successfully.'
            },
            status=status.HTTP_200_OK
        )

# ==== Forgot Password — Send OTP ====
class SendResetOTPAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = SendResetOTPSerializer(
            data=request.data
        )

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        phone = serializer.validated_data['email']

        # Generate OTP
        otp = generate_otp()

        # Save OTP
        save_otp(
            phone,
            otp
        )

        # Development testing
        print("\n")
        print("=" * 50)
        print(f"PHONE NUMBER: {phone}")
        print(f"PASSWORD RESET OTP: {otp}")
        print("=" * 50)
        print("\n")

        return Response(
            {
                "success": True,
                "message": "OTP generated successfully.",
                # Remove this in production!
                "otp": otp
            },
            status=status.HTTP_200_OK
        )

# ==== Reset Password API ====
class ResetPasswordAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):

        serializer = ResetPasswordSerializer(
            data=request.data
        )

        if not serializer.is_valid():

            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        phone = serializer.validated_data["email"]

        new_password = serializer.validated_data[
            "new_password"
        ]

        try:

            user = CustomUser.objects.get(
                email=phone,
                is_active=True
            )

            # Set new password
            user.set_password(new_password)

            user.save(
                update_fields=[
                    "password",
                    "updated_at"
                ]
            )

            # Delete OTP after successful reset
            delete_otp(phone)

            return Response(
                {
                    "success": True,
                    "message":
                    "Password reset successfully."
                },
                status=status.HTTP_200_OK
            )

        except CustomUser.DoesNotExist:

            return Response(
                {
                    "error":
                    "User not found."
                },
                status=status.HTTP_404_NOT_FOUND
            )