# from django.shortcuts import render
# from rest_framework import viewsets

# from .models import Opera
# from .serializers import (
#     OperaSerializer,
#     UnpaginateOperaSerializer,
# )

from rest_framework import viewsets
from .models import (
    OperaSection, WritterChirkut, OperaClient, 
)

from .serializers import (
    OperaSerializer,
    UnpaginateOperaSerializer,
    
    WritterChirkutSerializer,
    UnpaginateWritterChirkutSerializer,
    
    OperaClientSerializer,
    UnpaginateOperaClientSerializer,
    
    OperaClientSerializer,
    UnpaginateOperaClientSerializer,
)


class OperaSectionView(viewsets.ModelViewSet):
    queryset = OperaSection.objects.all().order_by("-created_at")
    serializer_class = OperaSerializer


class OperaSectionUnpaginateView(viewsets.ModelViewSet):
    queryset = OperaSection.objects.all().order_by("-created_at")
    serializer_class = UnpaginateOperaSerializer
    
    
class WritterChirkutView(viewsets.ModelViewSet):
    queryset = WritterChirkut.objects.all().order_by("-created_at")
    serializer_class = WritterChirkutSerializer
    # pagination_class = WritterChirkutPagination


class UnpaginateWritterChirkutView(viewsets.ModelViewSet):
    queryset = WritterChirkut.objects.all().order_by("-created_at")
    serializer_class = UnpaginateWritterChirkutSerializer
    
    
class OperaClientView(viewsets.ModelViewSet):
    queryset = OperaClient.objects.all().order_by("-created_at")
    serializer_class = OperaClientSerializer
    # pagination_class = OperaClientPagination


class UnpaginateOperaClientView(viewsets.ModelViewSet):
    queryset = OperaClient.objects.all().order_by("-created_at")
    serializer_class = UnpaginateOperaClientSerializer
