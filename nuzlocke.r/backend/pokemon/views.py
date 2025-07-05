from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Pokemon, Route, Nature
from .serializers import PokemonSerializer, RouteSerializer, NatureSerializer

class PokemonListView(generics.ListAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonDetailView(generics.RetrieveAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

@api_view(['GET'])
def route_list(request):
    """Get all routes - matches /api/pokemon/routes/all"""
    routes = Route.objects.all()
    serializer = RouteSerializer(routes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def nature_list(request):
    """Get all natures - matches /api/pokemon/natures/all"""
    natures = Nature.objects.all()
    serializer = NatureSerializer(natures, many=True)
    return Response(serializer.data) 