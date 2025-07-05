from django.urls import path
from . import views

urlpatterns = [
    path('', views.PokemonListView.as_view(), name='pokemon-list'),
    path('<int:pk>/', views.PokemonDetailView.as_view(), name='pokemon-detail'),
    path('routes/all/', views.route_list, name='route-list'),
    path('natures/all/', views.nature_list, name='nature-list'),
] 