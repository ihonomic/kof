
from django.contrib import admin
from django.urls import path, include
from .views import FormViewPage, SubmitFormDetails, FormRecord

urlpatterns = [
    path('', FormViewPage, name="form-page"),
    path('submit', SubmitFormDetails.as_view(), name="submit"),
    path('download', FormRecord.as_view(), name="downlaod-form-data")
]
