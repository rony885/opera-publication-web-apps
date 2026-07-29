from rest_framework import viewsets

from .models import Author
from .serializers import (
    AuthorSerializer,
    UnpaginateAuthorSerializer,
)
# from .paginations import AuthorPagination


class AuthorView(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by("-created_at")
    serializer_class = AuthorSerializer
    # pagination_class = AuthorPagination


class AuthorUnpaginateView(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by("-created_at")
    serializer_class = UnpaginateAuthorSerializer