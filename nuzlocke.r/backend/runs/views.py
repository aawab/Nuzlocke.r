from rest_framework import generics, status
from rest_framework.response import Response
from .models import NuzlockeRun
from .serializers import NuzlockeRunSerializer

class NuzlockeRunListCreateView(generics.ListCreateAPIView):
    queryset = NuzlockeRun.objects.all()
    serializer_class = NuzlockeRunSerializer

class NuzlockeRunDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NuzlockeRun.objects.all()
    serializer_class = NuzlockeRunSerializer 