from rest_framework import viewsets

from .models import GeneralSettings
from .serializers import (
    GeneralSettingsSerializer,
    UnpaginateGeneralSettingsSerializer,
)


class GeneralSettingsView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = GeneralSettingsSerializer
    # pagination_class = GeneralSettingsPagination


class GeneralSettingsUnpaginateView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = UnpaginateGeneralSettingsSerializer