import random
from django.core.cache import cache


OTP_EXPIRY_SECONDS = 300


def generate_otp():
    return str(random.randint(100000, 999999))


def save_otp(email, otp):
    cache_key = f"password_reset_otp_{email}"
    cache.set(
        cache_key,
        otp,
        timeout=OTP_EXPIRY_SECONDS
    )


def get_otp(email):
    cache_key = f"password_reset_otp_{email}"
    return cache.get(cache_key)


def delete_otp(email):
    cache_key = f"password_reset_otp_{email}"
    cache.delete(cache_key)