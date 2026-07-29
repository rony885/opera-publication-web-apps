from django.contrib import admin
from .models import Home, Banner, Feature


@admin.register(Home)
class HomeAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "slider_title",
        "SliderImage",
        "status",
        "created_at",
    )

    readonly_fields = (
        "SliderImage",
    )
    
    
@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "banner_title",
        "BannerImage",
        "status",
        "created_at",
    )

    readonly_fields = (
        "BannerImage",
    )


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "feature_title",
        "FeatureImageOne",
        "FeatureImageTwo",
        "status",
        "created_at",
    )

    readonly_fields = (
        "FeatureImageOne",
        "FeatureImageTwo",
    )