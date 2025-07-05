from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Encounter
from .serializers import EncounterSerializer

class EncounterListCreateView(generics.ListCreateAPIView):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

class EncounterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

@api_view(['GET'])
def encounters_for_run(request, run_id):
    """Get encounters for a specific run - matches /api/encounters/run/:runId"""
    encounters = Encounter.objects.filter(run_id=run_id)
    serializer = EncounterSerializer(encounters, many=True)
    return Response(serializer.data) 