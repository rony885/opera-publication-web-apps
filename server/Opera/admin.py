from django.contrib import admin
from .models import OperaSection,     OperaStatistic, WritterChirkut, OperaClient


@admin.register(OperaSection)
class OperaSectionAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "title",
        "Image",
        "status",
        "created_at",
    )

    readonly_fields = ("Image",)

@admin.register(OperaStatistic)
class OperaStatisticAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "opera",
        "count",
        "label",
        "suffix",
    )
    
    
@admin.register(WritterChirkut)
class WritterChirkutAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "name",
        "designation",
        "Image",
        "status",
        "created_at",
    )

    readonly_fields = (
        "Image",
    )

    search_fields = (
        "name",
        "designation",
    )

    list_filter = (
        "status",
        "created_at",
    )

    list_per_page = 10
    
    
@admin.register(OperaClient)
class OperaClientAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "Image",
        "operaClientLink",
        "status",
        "created_at",
    )

    readonly_fields = (
        "Image",
    )

    search_fields = (
        "operaClientLink",
    )

    list_filter = (
        "status",
        "created_at",
    )

    list_per_page = 10