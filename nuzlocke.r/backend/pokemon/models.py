from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

class Pokemon(models.Model):
    name = models.CharField(max_length=100)
    types = ArrayField(models.CharField(max_length=20), size=2)
    abilities = ArrayField(models.CharField(max_length=50), size=5)
    base_stats = models.JSONField()
    sprite_url = models.URLField(max_length=255, blank=True, null=True)
    
    class Meta:
        db_table = 'pokemon'
    
    def __str__(self):
        return self.name

class Route(models.Model):
    CATEGORY_CHOICES = [
        ('starter', 'Starter'),
        ('route', 'Route'),
        ('city', 'City'),
        ('cave', 'Cave'),
        ('special', 'Special'),
        ('gym', 'Gym'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    level_range = models.JSONField()
    pokemon_pool = ArrayField(models.IntegerField(), size=20)
    
    class Meta:
        db_table = 'routes'
    
    def __str__(self):
        return self.name

class Nature(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    increased_stat = models.CharField(max_length=50, blank=True)
    decreased_stat = models.CharField(max_length=50, blank=True)
    
    class Meta:
        db_table = 'natures'
    
    def __str__(self):
        return self.name 