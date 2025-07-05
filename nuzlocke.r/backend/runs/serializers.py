from rest_framework import serializers
from .models import NuzlockeRun

class NuzlockeRunSerializer(serializers.ModelSerializer):
    class Meta:
        model = NuzlockeRun
        fields = ['id', 'game_name', 'trainer_name', 'rules', 'created_at', 'is_active'] 