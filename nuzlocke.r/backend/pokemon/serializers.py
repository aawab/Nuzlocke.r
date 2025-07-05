from rest_framework import serializers
from .models import Pokemon, Route, Nature

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['id', 'name', 'types', 'abilities', 'base_stats', 'sprite_url']

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ['id', 'name', 'category', 'level_range', 'pokemon_pool']

class NatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nature
        fields = ['name', 'increased_stat', 'decreased_stat'] 