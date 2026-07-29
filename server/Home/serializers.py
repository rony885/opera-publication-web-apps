from rest_framework import serializers
from .models import Home, Banner, Feature


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = "__all__"


class UnpaginateHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = "__all__"
        
class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"


class UnpaginateBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = "__all__"


class UnpaginateFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = "__all__"