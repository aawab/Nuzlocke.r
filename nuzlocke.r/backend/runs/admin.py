from django.contrib import admin
from .models import NuzlockeRun

@admin.register(NuzlockeRun)
class NuzlockeRunAdmin(admin.ModelAdmin):
    list_display = ['trainer_name', 'game_name', 'created_at', 'is_active']
    list_filter = ['is_active', 'created_at']
    search_fields = ['trainer_name', 'game_name']
    ordering = ['-created_at']
    readonly_fields = ['id', 'created_at'] 