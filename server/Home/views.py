from rest_framework import viewsets

from .models import Home, Banner, Feature
from .serializers import (
    HomeSerializer,
    UnpaginateHomeSerializer,
    BannerSerializer,
    UnpaginateBannerSerializer,
    FeatureSerializer,
    UnpaginateFeatureSerializer,
)


class HomeView(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


class HomeUnpaginateView(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = UnpaginateHomeSerializer
    
class BannerView(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer


class BannerUnpaginateView(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = UnpaginateBannerSerializer


class FeatureView(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer


class FeatureUnpaginateView(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = UnpaginateFeatureSerializer