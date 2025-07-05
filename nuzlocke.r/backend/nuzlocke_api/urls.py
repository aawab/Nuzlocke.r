from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from datetime import datetime

def root_view(request):
    return JsonResponse({
        'message': 'Welcome to Nuzlocke.r API',
        'author': settings.PROJECT_AUTHOR,
        'description': 'Pokemon Nuzlocke Tracker Backend API',
        'version': settings.PROJECT_VERSION,
        'endpoints': {
            'health': '/health/',
            'admin': '/admin/',
            'api': {
                'pokemon': '/api/pokemon/',
                'runs': '/api/runs/',
                'encounters': '/api/encounters/'
            }
        }
    })

def health_check(request):
    return JsonResponse({
        'status': 'OK',
        'timestamp': datetime.now().isoformat(),
        'project': settings.PROJECT_NAME,
        'author': settings.PROJECT_AUTHOR,
        'version': settings.PROJECT_VERSION
    })

urlpatterns = [
    path('', root_view, name='root'),
    path('health/', health_check, name='health'),
    path('admin/', admin.site.urls),
    path('api/pokemon/', include('pokemon.urls')),
    path('api/runs/', include('runs.urls')),
    path('api/encounters/', include('encounters.urls')),
] 