from rest_framework import serializers
from .models import Encounter

class EncounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encounter
        fields = ['id', 'run_id', 'pokemon_id', 'nickname', 'level', 'nature', 'ability', 
                  'status', 'location', 'route', 'caught', 'date_encountered'] 