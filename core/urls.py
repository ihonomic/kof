
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('server/', admin.site.urls),
    path('', include("form.urls")),
    path('api-auth/', include('rest_framework.urls'))
]
