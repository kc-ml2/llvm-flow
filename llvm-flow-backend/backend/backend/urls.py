from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from llvmcfg.views import UploadAPIViewC, UploadAPIViewCPP, UploadAPIViewLL, ProfileAPIView, AllProfileAPIView, ShowAPIView, DeleteAPIview, CheckSameUser
from django.conf.urls import handler400

urlpatterns = [
    path('admin/', admin.site.urls),
    path('uploadC/',  UploadAPIViewC.as_view(), name='uploadC'),
    path('uploadCPP/',  UploadAPIViewCPP.as_view(), name='uploadCPP'),
    path('uploadLL/',  UploadAPIViewLL.as_view(), name='uploadLL'),
    path('profile/',  ProfileAPIView.as_view(), name='profile'),
    path('allprofile/',  AllProfileAPIView.as_view(), name='allprofile'),
    path('show/',  ShowAPIView.as_view(), name='show'),
    path('delete/', DeleteAPIview.as_view(), name='delete'),
    path('identify/', CheckSameUser.as_view(), name='identify')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
