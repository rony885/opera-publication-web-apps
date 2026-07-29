from django.contrib import admin
from .models import Author


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "Image",
        "name",
        "status",
        "created_at",
    )

    readonly_fields = ("Image",)

    search_fields = (
        "name",
    )

    list_filter = (
        "status",
        "created_at",
    )

    list_per_page = 10