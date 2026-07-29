
from rest_framework import routers
from .views import AuthorView, AuthorUnpaginateView
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

route = routers.DefaultRouter()

route.register(
    "author",
    AuthorView,
    basename="author_view",
)

route.register(
    "unpaginate_author",
    AuthorUnpaginateView,
    basename="unpaginate_author_view",
)

urlpatterns = [
    path("author_api/", include(route.urls)),
]


# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
