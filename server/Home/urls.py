from django.urls import include, path
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

from .views import HomeView, HomeUnpaginateView, BannerView, BannerUnpaginateView,  FeatureView,  FeatureUnpaginateView
   

router = routers.DefaultRouter()

router.register(
    "home",
    HomeView,
    basename="home"
)

router.register(
    "unpaginate_home",
    HomeUnpaginateView,
    basename="unpaginate_home"
)

router.register(
    "banner",
    BannerView,
    basename="banner"
)

router.register(
    "unpaginate_banner",
    BannerUnpaginateView,
    basename="unpaginate_banner"
)

router.register(
    "feature",
    FeatureView,
    basename="feature"
)

router.register(
    "unpaginate_feature",
    FeatureUnpaginateView,
    basename="unpaginate_feature"
)

urlpatterns = [
    path("home_api/", include(router.urls)),
]


# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)