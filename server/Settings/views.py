from rest_framework import viewsets

from .models import DeliveryType, GeneralSettings
from .serializers import (
    DeliveryTypeSerializer,
    GeneralSettingsSerializer,
)
from .serializers import (
    UnpaginateDeliveryTypeSerializer,
    UnpaginateGeneralSettingsSerializer,
)

class DeliveryTypeView(viewsets.ModelViewSet):
    queryset = DeliveryType.objects.all()
    serializer_class = DeliveryTypeSerializer
    # pagination_class = DeliveryTypePagination


class DeliveryTypeUnpaginateView(viewsets.ModelViewSet):
    queryset = DeliveryType.objects.all()
    serializer_class = UnpaginateDeliveryTypeSerializer

class GeneralSettingsView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = GeneralSettingsSerializer
    # pagination_class = GeneralSettingsPagination


class GeneralSettingsUnpaginateView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = UnpaginateGeneralSettingsSerializer