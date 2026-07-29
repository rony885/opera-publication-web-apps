from django.db import models
from django.utils.html import mark_safe


class GeneralSettings(models.Model):
    company_name = models.CharField(max_length=255)

    address = models.TextField()

    company_phone = models.CharField(max_length=30)

    other_phone = models.CharField(
        max_length=30,
        blank=True,
        null=True
    )

    email = models.EmailField()

    company_logo = models.ImageField(
        upload_to="settings/logo/"
    )

    facebook_link = models.URLField(
        blank=True,
        null=True
    )

    instagram_link = models.URLField(
        blank=True,
        null=True
    )

    twitter_link = models.URLField(
        blank=True,
        null=True
    )

    youtube_link = models.URLField(
        blank=True,
        null=True
    )

    map_url = models.TextField(
        blank=True,
        null=True
    )

    terms_conditions = models.TextField(  blank=True,
        null=True)

    privacy_policy = models.TextField(  blank=True,
        null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "General Settings"
        verbose_name_plural = "General Settings"

    def __str__(self):
        return self.company_name

    def logo_preview(self):
        if self.company_logo:
            return mark_safe(
                f'<img src="{self.company_logo.url}" width="70" height="70" />'
            )
        return "-"

    logo_preview.short_description = "Logo"
