from django.contrib import admin
from .models import PassModel, FileModel, IdentifierModel

class PassInline(admin.TabularInline):
    model = PassModel

class FileInline(admin.TabularInline):
    model = FileModel

class UploadAdmin(admin.ModelAdmin):
    inlines = [
        PassInline,
        FileInline
    ]

admin.site.register(IdentifierModel, UploadAdmin)
