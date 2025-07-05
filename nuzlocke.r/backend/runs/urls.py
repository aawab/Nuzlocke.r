from django.urls import path
from . import views

urlpatterns = [
    path('', views.NuzlockeRunListCreateView.as_view(), name='run-list-create'),
    path('<uuid:pk>/', views.NuzlockeRunDetailView.as_view(), name='run-detail'),
] 