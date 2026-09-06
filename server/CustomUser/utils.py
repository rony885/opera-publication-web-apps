# import random
# from django.core.cache import cache


# OTP_EXPIRY_SECONDS = 300


# def generate_otp():
#     return str(random.randint(100000, 999999))


# def save_otp(email, otp):
#     cache_key = f"password_reset_otp_{email}"
#     cache.set(
#         cache_key,
#         otp,
#         timeout=OTP_EXPIRY_SECONDS
#     )


# def get_otp(email):
#     cache_key = f"password_reset_otp_{email}"
#     return cache.get(cache_key)


# def delete_otp(email):
#     cache_key = f"password_reset_otp_{email}"
#     cache.delete(cache_key)

import random
from django.core.cache import cache
from django.conf import settings


def generate_otp():
    return str(random.randint(100000, 999999))


def get_cache_key(phone):
    return f"password_reset_otp_{phone}"


def save_otp(phone, otp):
    cache.set(
        get_cache_key(phone),
        otp,
        timeout=settings.OTP_EXPIRY_SECONDS
    )


def get_otp(phone):
    return cache.get(
        get_cache_key(phone)
    )


def delete_otp(phone):
    cache.delete(
        get_cache_key(phone)
    )