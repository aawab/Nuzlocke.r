from django.urls import path
from . import views

urlpatterns = [
    path('', views.EncounterListCreateView.as_view(), name='encounter-list-create'),
    path('<uuid:pk>/', views.EncounterDetailView.as_view(), name='encounter-detail'),
    path('run/<uuid:run_id>/', views.encounters_for_run, name='encounters-for-run'),
] 