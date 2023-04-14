from email.policy import default
from importlib.metadata import files
from django.db import models
import time
from django.conf import settings
   
def cfile_save_path(instance, filename):
    filename = filename.replace('/', '_')
    return "{0}/{1}".format(time.strftime("%Y%m%d-%H%M%S0"), filename)

class IdentifierModel(models.Model):
    Identifier = models.TextField(null=False, default='')
    
class PassModel(models.Model):
    Identifier_field = models.ForeignKey(IdentifierModel, on_delete=models.CASCADE)
    transformpass = models.TextField(null=False, default='')

class FileModel(models.Model):
    Identifier_field = models.ForeignKey(IdentifierModel, on_delete=models.CASCADE)
    content = models.FileField(upload_to=cfile_save_path)
