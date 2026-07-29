from django.db import models
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars
from django.contrib import admin


class NoLogAdmin(admin.ModelAdmin):
    def log_addition(self, request, object, message):
        pass

    def log_change(self, request, object, message):
        pass

    def log_deletion(self, request, object, object_repr):
        pass


def generate_book_id():
    prefix = "BOOK-"
    next_book_id = "00001"

    last_book = Book.objects.filter(
        book_id__startswith=prefix
    ).order_by("book_id").last()

    if last_book:
        last_number = int(last_book.book_id[-5:])
        next_book_id = "{0:05d}".format(last_number + 1)

    return prefix + next_book_id


class Category(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to="uploads/images/category",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "category"
        ordering = ["name"]

    def __str__(self):
        return self.name

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;" />'
            )
        return "No Image"

    Image.short_description = "Image"


class Author(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "book_author"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Book(models.Model):

    BOOK_TYPE = (
        ("Hard Copy", "Hard Copy"),
        ("PDF", "PDF"),
        ("E-Book", "E-Book"),
    )

    book_id = models.CharField(
        max_length=25,
        unique=True,
        default=generate_book_id,
    )

    status = models.BooleanField(default=True)

    book_type = models.CharField(
        max_length=20,
        choices=BOOK_TYPE,
        default="Hard Copy",
    )

    title = models.CharField(max_length=255)

    subtitle = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )

    book_code = models.CharField(
        max_length=50,
        unique=True,
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="books",
    )

    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE,
        related_name="books",
    )
    # author = models.ForeignKey(
    #     Author,
    #     on_delete=models.DO_NOTHING,
    #     related_name="books",
    # )
    
    unit_quantity = models.CharField(
        max_length=30,
        default="1 Piece",
    )

    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=5.0,
    )

    old_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    stock = models.PositiveIntegerField(default=0)

    total_pages = models.PositiveIntegerField(default=0)

    isNewBook = models.BooleanField(default=False)

    isUpcomingBook = models.BooleanField(default=False)

    isBestSellingBook = models.BooleanField(default=False)

    image = models.ImageField(
        upload_to="uploads/images/book",
        blank=True,
        null=True,
    )

    details = models.TextField(
        blank=True,
        null=True,
    )

    specification = models.TextField(
        blank=True,
        null=True,
    )

    review = models.TextField(
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        db_table = "book"
        ordering = ["-id"]

    def __str__(self):
        return self.title

    def Details(self):
        return truncatechars(self.details, 50)

    Details.short_description = "Details"

    def Specification(self):
        return truncatechars(self.specification, 50)

    Specification.short_description = "Specification"

    def Review(self):
        return truncatechars(self.review, 50)

    Review.short_description = "Review"

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;" />'
            )
        return "No Image"

    Image.short_description = "Book Image"