from django.db import models
import uuid

class Encounter(models.Model):
    STATUS_CHOICES = [
        ('alive', 'Alive'),
        ('dead', 'Dead'),
        ('boxed', 'Boxed'),
        ('released', 'Released'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    run_id = models.UUIDField()
    pokemon_id = models.IntegerField()
    nickname = models.CharField(max_length=100)
    level = models.IntegerField()
    nature = models.CharField(max_length=50, blank=True)
    ability = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='alive')
    location = models.CharField(max_length=100)
    route = models.CharField(max_length=100)
    caught = models.BooleanField(default=False)
    date_encountered = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'encounters'
    
    def __str__(self):
        return f"{self.nickname} - {self.location}" 