from django.urls import path, include
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static

from .views import (
    OperaSectionView,
    OperaSectionUnpaginateView,
    
    WritterChirkutView,
    UnpaginateWritterChirkutView,
    
    OperaClientView,
    UnpaginateOperaClientView,
)

route = routers.DefaultRouter()

route.register(
    "opera_section",
    OperaSectionView,
    basename="opera_section",
)

route.register(
    "unpaginate_opera_section",
    OperaSectionUnpaginateView,
    basename="unpaginate_opera_section",
)

route.register(
    "writter_chirkut",
    WritterChirkutView,
    basename="writter_chirkut",
)

route.register(
    "unpaginate_writter_chirkut",
    UnpaginateWritterChirkutView,
    basename="unpaginate_writter_chirkut",
)

route.register(
    "opera_clients",
    OperaClientView,
    basename="opera_clients",
)

route.register(
    "unpaginate_opera_clients",
    UnpaginateOperaClientView,
    basename="unpaginate_opera_clients",
)

urlpatterns = [
    path("opera_api/", include(route.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
