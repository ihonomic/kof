from django.contrib import admin
from .models import FormData, DocumentUpload
# Register your models here.
admin.site.register((FormData, DocumentUpload))
