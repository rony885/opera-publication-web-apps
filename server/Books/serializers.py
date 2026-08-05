# from rest_framework import serializers
# from .models import Category, Book


# class CategorySerializer(serializers.ModelSerializer):
#     image = serializers.ImageField(use_url=True)

#     class Meta:
#         model = Category
#         fields = "__all__"


# class UnpaginateCategorySerializer(serializers.ModelSerializer):
#     image = serializers.ImageField(use_url=True)

#     class Meta:
#         model = Category
#         fields = "__all__"


# class BookSerializer(serializers.ModelSerializer):

#     category_name = serializers.CharField(
#         source="category.name",
#         read_only=True,
#     )

#     image = serializers.ImageField(use_url=True)

#     class Meta:
#         model = Book
#         fields = "__all__"


# class UnpaginateBookSerializer(serializers.ModelSerializer):

#     category_name = serializers.CharField(
#         source="category.name",
#         read_only=True,
#     )

#     image = serializers.ImageField(use_url=True)

#     class Meta:
#         model = Book
#         fields = "__all__"

from rest_framework import serializers
# from .models import Category, Author, Book
from .models import Category, UnitType, Book
from Author.models import Author


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class UnpaginateCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class UnitTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = UnitType
        fields = "__all__"


class UnpaginateUnitTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = UnitType
        fields = "__all__"


      
class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = (
            "id",
            "name",
            # "image",
        )


class UnpaginateAuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = "__all__"



class BookSerializer(serializers.ModelSerializer):

    status = serializers.BooleanField(default=True)

    category = CategorySerializer()

    unit_type = UnitTypeSerializer()
    
    author = AuthorSerializer()
    
    class Meta:
        model = Book
        fields = "__all__"


class UnpaginateBookSerializer(serializers.ModelSerializer):

    status = serializers.BooleanField(default=True)
    
    category = CategorySerializer()

    unit_type = UnitTypeSerializer()
    
    author = AuthorSerializer()
    
    class Meta:
        model = Book
        fields = "__all__"

   