from django.contrib import admin
from .models import Encounter

@admin.register(Encounter)
class EncounterAdmin(admin.ModelAdmin):
    list_display = ['nickname', 'pokemon_id', 'level', 'status', 'location', 'date_encountered']
    list_filter = ['status', 'caught', 'date_encountered']
    search_fields = ['nickname', 'location']
    ordering = ['-date_encountered']
    readonly_fields = ['id', 'date_encountered'] 