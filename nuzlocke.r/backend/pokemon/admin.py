from django.contrib import admin
from .models import Pokemon, Route, Nature

@admin.register(Pokemon)
class PokemonAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'types', 'abilities']
    list_filter = ['types']
    search_fields = ['name']
    ordering = ['id']

@admin.register(Route)
class RouteAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'level_range']
    list_filter = ['category']
    search_fields = ['name']
    ordering = ['name']

@admin.register(Nature)
class NatureAdmin(admin.ModelAdmin):
    list_display = ['name', 'increased_stat', 'decreased_stat']
    search_fields = ['name']
    ordering = ['name'] 