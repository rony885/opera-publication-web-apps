from django.db import models
from django.utils.html import mark_safe


class OperaSection(models.Model):
    status = models.BooleanField(default=True)

    title = models.CharField(max_length=255)

    description = models.TextField(blank=True, null=True)

    image = models.ImageField(
        upload_to="uploads/images/opera",
        blank=True,
        null=True
    )

    features_one = models.CharField(max_length=255, blank=True, null=True)

    features_two = models.CharField(max_length=255, blank=True, null=True)

    features_three = models.CharField(max_length=255, blank=True, null=True)

    features_four = models.CharField(max_length=255, blank=True, null=True)

    opera_video = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "opera"
        # verbose_name = "Opera Section"
        # verbose_name_plural = "Opera Section"

    def __str__(self):
        return self.title

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;">'
            )
        return "No Image"

    Image.short_description = "Image"

# ======== Opera Count ========    
class OperaStatistic(models.Model):
    opera = models.ForeignKey(
        OperaSection,
        on_delete=models.CASCADE,
        related_name="statistics"
    )

    count = models.IntegerField()

    label = models.CharField(max_length=255)

    suffix = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "opera_statistics"

    def __str__(self):
        return self.label
    
    
# ======== Writter Chirkut ========    
class WritterChirkut(models.Model):
    status = models.BooleanField(default=True)

    name = models.CharField(max_length=255)

    designation = models.CharField(
        max_length=255,
        blank=True,
        null=True
    )

    image = models.ImageField(
        upload_to="uploads/images/writter_chirkut",
        blank=True,
        null=True
    )

    description = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "writter_chirkut"

    def __str__(self):
        return self.name

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;" />'
            )
        return "No Image"

    Image.short_description = "Image"
    
    
# ======== Opera Clients ========      
class OperaClient(models.Model):
    status = models.BooleanField(default=True)

    image = models.ImageField(
        upload_to="uploads/images/opera_clients",
        blank=True,
        null=True
    )

    operaClientLink = models.URLField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "opera_clients"

    def __str__(self):
        return f"Client {self.id}"

    def Image(self):
        if self.image:
            return mark_safe(
                f'<img src="{self.image.url}" width="45" height="45" style="border-radius:8px;" />'
            )
        return "No Image"

    Image.short_description = "Client Image"