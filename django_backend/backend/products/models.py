from distutils.command.upload import upload
import email
from email.mime import image
from unicodedata import category, name
from django.db import models

# Create your models here.


class Product(models.Model):
    image = models.ImageField(
        upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(
        max_digits=6, decimal_places=2, null=False, blank=False)
    description = models.TextField()
    category = models.CharField(max_length=50, null=True, blank=True)
    # date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
