from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Category, UnitType, Book
from Author.models import Author
from .serializers import CategorySerializer, UnpaginateCategorySerializer, AuthorSerializer, UnpaginateAuthorSerializer, UnitTypeSerializer, UnpaginateUnitTypeSerializer, BookSerializer, UnpaginateBookSerializer
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
    
class UnitTypeView(viewsets.ModelViewSet):
    queryset = UnitType.objects.all()
    serializer_class = UnitTypeSerializer


class UnitTypeUnpaginateView(viewsets.ModelViewSet):
    queryset = UnitType.objects.all()
    serializer_class = UnpaginateUnitTypeSerializer


class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    # pagination_class = BookPagination


class BookUnpaginateView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = UnpaginateBookSerializer
