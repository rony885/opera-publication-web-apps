from rest_framework import serializers
from .models import Author


class AuthorSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Author
        fields = "__all__"


class UnpaginateAuthorSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Author
        fields = "__all__"