# from django.contrib import admin
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static

# from server.Books.views import BooksUnpaginateView, BooksView

# from .views import BooksView, BooksUnpaginateView

# from rest_framework import routers
# route = routers.DefaultRouter()

# route.register("books", BooksView,
#                basename='books_view')
# route.register("unpaginate_books", BooksUnpaginateView,
#                basename='unpaginate_books_view')

# urlpatterns = [
#     path('books_api/', include(route.urls)),
# ]

# # +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL,
#                           document_root=settings.STATIC_ROOT)
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)



from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    CategoryView,
    CategoryUnpaginateView,
    UnitTypeView,
    UnitTypeUnpaginateView,
    BookView,
    BookUnpaginateView,
)

router = DefaultRouter()

router.register(
    "category",
    CategoryView,
    basename="category",
)

router.register(
    "unpaginate_category",
    CategoryUnpaginateView,
    basename="unpaginate_category",
)

router.register(
    "unit_type",
    UnitTypeView,
    basename="unit_type",
)

router.register(
    "unpaginate_unit_type",
    UnitTypeUnpaginateView,
    basename="unpaginate_unit_type",
)

router.register(
    "book",
    BookView,
    basename="book",
)

router.register(
    "unpaginate_book",
    BookUnpaginateView,
    basename="unpaginate_book",
)

urlpatterns = [
    path("book_api/", include(router.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)