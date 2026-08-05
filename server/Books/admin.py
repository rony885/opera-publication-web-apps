from django.contrib import admin
# from django_json_widget.widgets import JSONEditorWidget
from .models import Category, UnitType, Book, NoLogAdmin
from Author.models import Author


@admin.register(Category)
class CategoryAdmin(NoLogAdmin):
    list_display = (
        "id",
        "Image",
        "name",
        "status",
        "created_at",
    )
    list_display_links = ("id", "name")
    search_fields = ("name",)
    list_filter = ("status",)
    readonly_fields = (
        "Image",
        "created_at",
        "updated_at",
    )
    
@admin.register(UnitType)
class UnitTypeAdmin(NoLogAdmin):
    list_display = (
        "id",
        "name",
        "status",
        "created_at",
    )

    list_display_links = (
        "id",
        "name",
    )

    search_fields = (
        "name",
    )

    list_filter = (
        "status",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

# @admin.register(Author)
# class AuthorAdmin(NoLogAdmin):
#     list_display = (
#         "id",
#         "name",
#         "status",
#         "created_at",
#     )
#     list_display_links = ("id", "name")
#     search_fields = ("name",)
#     list_filter = ("status",)


@admin.register(Book)
class BookAdmin(NoLogAdmin):
# class BookAdmin(admin.ModelAdmin):
#     formfield_overrides = {
#         models.JSONField: {'widget': JSONEditorWidget},
#     }
    list_display = (
        "id",
        "Image",
        "title",
        "author",
        "category",
        "unit_type",
        "price",
        "stock",
        "status",
    )

    list_display_links = (
        "id",
        "title",
    )

    search_fields = (
        "title",
        "subtitle",
        "book_code",
    )

    list_filter = (
        "status",
        "category",
        "author",
        "isNewBook",
        "isUpcomingBook",
        "isBestSellingBook",
    )

    readonly_fields = (
        "book_id",
        "Image",
        "created_at",
        "updated_at",
    )

    fields = (
        "book_id",
        "status",
        "book_type",
        "title",
        "subtitle",
        "book_code",
        "category",
        "author",   # <-- HTML Select will appear here
        "unit_quantity",
        "unit_type",
        "rating",
        "old_price",
        "price",
        "stock",
        "total_pages",
        "isNewBook",
        "isUpcomingBook",
        "isBestSellingBook",
        "image",
        "Image",
        "details",
        "specification",
        "review",
        "created_at",
        "updated_at",
    )