from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Category, Author, Book
from .serializers import CategorySerializer, UnpaginateCategorySerializer, AuthorSerializer, UnpaginateAuthorSerializer, BookSerializer, UnpaginateBookSerializer
# from .paginations import CategoryPagination, BookPagination


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # pagination_class = CategoryPagination


class CategoryUnpaginateView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = UnpaginateCategorySerializer


class AuthorView(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorUnpaginateView(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = UnpaginateAuthorSerializer


class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    # pagination_class = BookPagination


class BookUnpaginateView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = UnpaginateBookSerializer
