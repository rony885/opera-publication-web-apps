# serializers.py
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'district',
                  'upazila', 'address', 'image', 'is_active', 'is_staff', 'is_superuser',
                  'created_at', 'updated_at']


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'district',
                  'upazila', 'address', 'image', 'password', 'is_staff', 'is_superuser',
                  'created_at', 'updated_at']
        read_only_fields = []

    def create(self, validated_data):
        is_staff = False
        is_superuser = False

        if 'is_staff' in validated_data:
            is_staff = validated_data.get('is_staff')
        if 'is_superuser' in validated_data:
            is_superuser = validated_data.get('is_superuser')

        user = CustomUser.objects.create_user(**validated_data)
        user.is_staff = is_staff
        user.is_superuser = is_superuser
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(email=email, password=password)
            if not user:
                raise serializers.ValidationError(
                    'Incorrect email or password')
        else:
            raise serializers.ValidationError(
                'Must include "email" and "password"')

        attrs['user'] = user
        return attrs
    

# ==== CHANGE PASSWORD ====

class ChangePasswordSerializer(serializers.Serializer):

    old_password = serializers.CharField(
        write_only=True
    )

    new_password = serializers.CharField(
        write_only=True,
        min_length=4
    )

    confirm_new_password = serializers.CharField(
        write_only=True
    )

    def validate(self, attrs):

        user = self.context['request'].user

        old_password = attrs.get('old_password')
        new_password = attrs.get('new_password')
        confirm_new_password = attrs.get(
            'confirm_new_password'
        )

        # Check old password
        if not user.check_password(old_password):
            raise serializers.ValidationError({
                'old_password': 'Old password is incorrect.'
            })

        # Check new password
        if new_password != confirm_new_password:
            raise serializers.ValidationError({
                'confirm_new_password':
                    'New password and confirm password do not match.'
            })

        # Don't allow same password
        if user.check_password(new_password):
            raise serializers.ValidationError({
                'new_password':
                    'New password must be different from old password.'
            })

        return attrs


# ==== FORGOT PASSWORD ====

class SendResetOTPSerializer(serializers.Serializer):

    email = serializers.CharField()

    def validate_email(self, value):

        value = value.strip()

        if not value:
            raise serializers.ValidationError(
                'Phone number is required.'
            )

        if not value.isdigit():
            raise serializers.ValidationError(
                'Phone number must contain only numbers.'
            )

        if len(value) != 11:
            raise serializers.ValidationError(
                'Phone number must contain 11 digits.'
            )

        try:
            CustomUser.objects.get(
                email=value,
                is_active=True
            )
        except CustomUser.DoesNotExist:

            raise serializers.ValidationError(
                'No active account found with this phone number.'
            )

        return value



# ==== RESET PASSWORD ====

class ResetPasswordSerializer(serializers.Serializer):

    email = serializers.CharField()

    otp = serializers.CharField()

    new_password = serializers.CharField(
        write_only=True,
        min_length=4
    )

    confirm_password = serializers.CharField(
        write_only=True
    )

    def validate_email(self, value):

        value = value.strip()

        if not value.isdigit():
            raise serializers.ValidationError(
                'Phone number must contain only numbers.'
            )

        if len(value) != 11:
            raise serializers.ValidationError(
                'Phone number must contain 11 digits.'
            )

        try:
            CustomUser.objects.get(
                email=value,
                is_active=True
            )
        except CustomUser.DoesNotExist:

            raise serializers.ValidationError(
                'No active account found with this phone number.'
            )

        return value

    def validate(self, attrs):

        email = attrs.get('email')
        otp = attrs.get('otp')
        new_password = attrs.get('new_password')
        confirm_password = attrs.get(
            'confirm_password'
        )

        # OTP validation
        from .utils import get_otp

        saved_otp = get_otp(email)

        if not saved_otp:
            raise serializers.ValidationError({
                'otp': 'OTP has expired. Please request a new OTP.'
            })

        if str(otp) != str(saved_otp):
            raise serializers.ValidationError({
                'otp': 'Invalid OTP.'
            })

        # Password confirmation
        if new_password != confirm_password:
            raise serializers.ValidationError({
                'confirm_password':
                    'New password and confirm password do not match.'
            })

        return attrs
