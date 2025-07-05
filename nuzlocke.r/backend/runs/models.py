from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

class NuzlockeRun(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    game_name = models.CharField(max_length=100)
    trainer_name = models.CharField(max_length=100)
    rules = ArrayField(models.CharField(max_length=200), size=20)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        db_table = 'nuzlocke_runs'
    
    def __str__(self):
        return f"{self.trainer_name}'s {self.game_name} Run" 