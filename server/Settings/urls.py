from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import DeliveryTypeView,  GeneralSettingsView
from .views import DeliveryTypeUnpaginateView, GeneralSettingsUnpaginateView, GeneralSettingsUnpaginateView, GeneralSettingsView

from rest_framework import routers
route = routers.DefaultRouter()

route.register("deliveryType", DeliveryTypeView,
               basename='deliveryType_view')
route.register("unpaginate_deliveryType", DeliveryTypeUnpaginateView,
               basename='unpaginate_deliveryType_view')


route.register("general_settings", GeneralSettingsView,
               basename='general_settings_view')
route.register("unpaginate_general_settings", GeneralSettingsUnpaginateView,
               basename='unpaginate_general_settings_view')

urlpatterns = [
    path('settings_api/', include(route.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL,
#                           document_root=settings.STATIC_ROOT)
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)