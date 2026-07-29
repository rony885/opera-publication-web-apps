from django.db import models
from django.utils.html import mark_safe


class Home(models.Model):
    slider_title = models.CharField(max_length=255)
    slider_description = models.TextField(blank=True, null=True)
    slider_image = models.ImageField(upload_to="uploads/home/slider")

    status = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "home"

    def __str__(self):
        return self.slider_title

    def SliderImage(self):
        if self.slider_image:
            return mark_safe(
                f'<img src="{self.slider_image.url}" width="45" height="45" style="border-radius:10px;" />'
            )
        return "No Image"
    
    
class Banner(models.Model):
    banner_title = models.CharField(max_length=255)
    banner_price = models.DecimalField(max_digits=10, decimal_places=2)
    banner_background_image = models.ImageField(
        upload_to="uploads/home/banner/background"
    )
    banner_image = models.ImageField(
        upload_to="uploads/home/banner/image"
    )
    banner_shape_image = models.ImageField(
        upload_to="uploads/home/banner/shape",
        blank=True,
        null=True,
    )

    status = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "banner"

    def __str__(self):
        return self.banner_title

    def BannerImage(self):
        if self.banner_image:
            return mark_safe(
                f'<img src="{self.banner_image.url}" width="45" height="45" style="border-radius:10px;" />'
            )
        return "No Image"

    BannerImage.short_description = "Banner Image"



class Feature(models.Model):
    feature_title = models.CharField(max_length=255)
    feature_image_one = models.ImageField(upload_to="uploads/home/feature")
    feature_image_two = models.ImageField(upload_to="uploads/home/feature")

    status = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "feature"

    def __str__(self):
        return self.feature_title

    def FeatureImageOne(self):
        if self.feature_image_one:
            return mark_safe(
                f'<img src="{self.feature_image_one.url}" width="45" height="45" style="border-radius:10px;" />'
            )
        return "No Image"

    def FeatureImageTwo(self):
        if self.feature_image_two:
            return mark_safe(
                f'<img src="{self.feature_image_two.url}" width="45" height="45" style="border-radius:10px;" />'
            )
        return "No Image"