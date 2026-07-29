
from django.db import models
from django.utils.html import mark_safe


class Author(models.Model):
    status = models.BooleanField(default=True)

    name = models.CharField(max_length=255)

    image = models.ImageField(
        upload_to="uploads/images/author",
        blank=True,
        null=True
    )

    details = models.TextField(blank=True, null=True)

    facebook = models.URLField(blank=True, null=True)

    twitter = models.URLField(blank=True, null=True)

    instagram = models.URLField(blank=True, null=True)

    youtube = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "author"

    def __str__(self):
        return self.name

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;" />'
            )
        return "No Image"

    Image.short_description = "Image"