from .models import IdentifierModel, PassModel, FileModel
from rest_framework import serializers

class IdentifierSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdentifierModel
        fields = ['Identifier']
        

class PassSerializer(serializers.ModelSerializer):
    class Meta:
        model = PassModel
        fields = '__all__'


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileModel
        fields = '__all__'