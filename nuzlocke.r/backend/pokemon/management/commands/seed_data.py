from django.core.management.base import BaseCommand
from pokemon.models import Pokemon, Route, Nature

class Command(BaseCommand):
    help = 'Seed the database with initial Pokemon data'

    def handle(self, *args, **options):
        # Clear existing data
        Pokemon.objects.all().delete()
        Route.objects.all().delete()
        Nature.objects.all().delete()
        
        # Seed Pokemon data
        pokemon_data = [
            {
                'id': 1,
                'name': 'Bulbasaur',
                'types': ['Grass', 'Poison'],
                'abilities': ['Overgrow', 'Chlorophyll'],
                'base_stats': {
                    'hp': 45, 'attack': 49, 'defense': 49,
                    'special_attack': 65, 'special_defense': 65, 'speed': 45
                },
                'sprite_url': '/assets/sprites/001.png'
            },
            {
                'id': 4,
                'name': 'Charmander',
                'types': ['Fire'],
                'abilities': ['Blaze', 'Solar Power'],
                'base_stats': {
                    'hp': 39, 'attack': 52, 'defense': 43,
                    'special_attack': 60, 'special_defense': 50, 'speed': 65
                },
                'sprite_url': '/assets/sprites/004.png'
            },
            {
                'id': 7,
                'name': 'Squirtle',
                'types': ['Water'],
                'abilities': ['Torrent', 'Rain Dish'],
                'base_stats': {
                    'hp': 44, 'attack': 48, 'defense': 65,
                    'special_attack': 50, 'special_defense': 64, 'speed': 43
                },
                'sprite_url': '/assets/sprites/007.png'
            },
            {
                'id': 25,
                'name': 'Pikachu',
                'types': ['Electric'],
                'abilities': ['Static', 'Lightning Rod'],
                'base_stats': {
                    'hp': 35, 'attack': 55, 'defense': 40,
                    'special_attack': 50, 'special_defense': 50, 'speed': 90
                },
                'sprite_url': '/assets/sprites/025.png'
            },
            {
                'id': 129,
                'name': 'Magikarp',
                'types': ['Water'],
                'abilities': ['Swift Swim', 'Rattled'],
                'base_stats': {
                    'hp': 20, 'attack': 10, 'defense': 55,
                    'special_attack': 15, 'special_defense': 20, 'speed': 80
                },
                'sprite_url': '/assets/sprites/129.png'
            },
            {
                'id': 130,
                'name': 'Gyarados',
                'types': ['Water', 'Flying'],
                'abilities': ['Intimidate', 'Moxie'],
                'base_stats': {
                    'hp': 95, 'attack': 125, 'defense': 79,
                    'special_attack': 60, 'special_defense': 100, 'speed': 81
                },
                'sprite_url': '/assets/sprites/130.png'
            },
            {
                'id': 54,
                'name': 'Psyduck',
                'types': ['Water'],
                'abilities': ['Damp', 'Cloud Nine'],
                'base_stats': {
                    'hp': 50, 'attack': 52, 'defense': 48,
                    'special_attack': 65, 'special_defense': 50, 'speed': 55
                },
                'sprite_url': '/assets/sprites/054.png'
            },
            {
                'id': 41,
                'name': 'Zubat',
                'types': ['Poison', 'Flying'],
                'abilities': ['Inner Focus', 'Infiltrator'],
                'base_stats': {
                    'hp': 40, 'attack': 45, 'defense': 35,
                    'special_attack': 30, 'special_defense': 40, 'speed': 55
                },
                'sprite_url': '/assets/sprites/041.png'
            },
            {
                'id': 74,
                'name': 'Geodude',
                'types': ['Rock', 'Ground'],
                'abilities': ['Rock Head', 'Sturdy'],
                'base_stats': {
                    'hp': 40, 'attack': 80, 'defense': 100,
                    'special_attack': 30, 'special_defense': 30, 'speed': 20
                },
                'sprite_url': '/assets/sprites/074.png'
            },
            {
                'id': 19,
                'name': 'Rattata',
                'types': ['Normal'],
                'abilities': ['Run Away', 'Guts'],
                'base_stats': {
                    'hp': 30, 'attack': 56, 'defense': 35,
                    'special_attack': 25, 'special_defense': 35, 'speed': 72
                },
                'sprite_url': '/assets/sprites/019.png'
            }
        ]
        
        for pokemon_info in pokemon_data:
            Pokemon.objects.create(**pokemon_info)
        
        # Seed Route data
        route_data = [
            {
                'id': 'starter',
                'name': 'Starter*',
                'category': 'starter',
                'level_range': {'min': 5, 'max': 5},
                'pokemon_pool': [1, 4, 7]
            },
            {
                'id': 'new-bark-town',
                'name': 'New Bark Town',
                'category': 'city',
                'level_range': {'min': 2, 'max': 4},
                'pokemon_pool': [25]
            },
            {
                'id': 'route-29',
                'name': 'Route 29',
                'category': 'route',
                'level_range': {'min': 2, 'max': 4},
                'pokemon_pool': [19, 25]
            },
            {
                'id': 'route-46',
                'name': 'Route 46',
                'category': 'route',
                'level_range': {'min': 2, 'max': 4},
                'pokemon_pool': [74, 19]
            },
            {
                'id': 'cherrygrove-city',
                'name': 'Cherrygrove City',
                'category': 'city',
                'level_range': {'min': 10, 'max': 20},
                'pokemon_pool': [129, 54]
            },
            {
                'id': 'route-30',
                'name': 'Route 30',
                'category': 'route',
                'level_range': {'min': 2, 'max': 4},
                'pokemon_pool': [19, 25, 41]
            },
            {
                'id': 'dark-cave',
                'name': 'Dark Cave',
                'category': 'cave',
                'level_range': {'min': 2, 'max': 4},
                'pokemon_pool': [41, 74]
            }
        ]
        
        for route_info in route_data:
            Route.objects.create(**route_info)
        
        # Seed Nature data
        nature_data = [
            {'name': 'Hardy', 'increased_stat': '', 'decreased_stat': ''},
            {'name': 'Lonely', 'increased_stat': 'Attack', 'decreased_stat': 'Defense'},
            {'name': 'Brave', 'increased_stat': 'Attack', 'decreased_stat': 'Speed'},
            {'name': 'Adamant', 'increased_stat': 'Attack', 'decreased_stat': 'Special Attack'},
            {'name': 'Naughty', 'increased_stat': 'Attack', 'decreased_stat': 'Special Defense'},
            {'name': 'Bold', 'increased_stat': 'Defense', 'decreased_stat': 'Attack'},
            {'name': 'Docile', 'increased_stat': '', 'decreased_stat': ''},
            {'name': 'Relaxed', 'increased_stat': 'Defense', 'decreased_stat': 'Speed'},
            {'name': 'Impish', 'increased_stat': 'Defense', 'decreased_stat': 'Special Attack'},
            {'name': 'Lax', 'increased_stat': 'Defense', 'decreased_stat': 'Special Defense'},
            {'name': 'Timid', 'increased_stat': 'Speed', 'decreased_stat': 'Attack'},
            {'name': 'Hasty', 'increased_stat': 'Speed', 'decreased_stat': 'Defense'},
            {'name': 'Serious', 'increased_stat': '', 'decreased_stat': ''},
            {'name': 'Jolly', 'increased_stat': 'Speed', 'decreased_stat': 'Special Attack'},
            {'name': 'Naive', 'increased_stat': 'Speed', 'decreased_stat': 'Special Defense'},
            {'name': 'Modest', 'increased_stat': 'Special Attack', 'decreased_stat': 'Attack'},
            {'name': 'Mild', 'increased_stat': 'Special Attack', 'decreased_stat': 'Defense'},
            {'name': 'Quiet', 'increased_stat': 'Special Attack', 'decreased_stat': 'Speed'},
            {'name': 'Bashful', 'increased_stat': '', 'decreased_stat': ''},
            {'name': 'Rash', 'increased_stat': 'Special Attack', 'decreased_stat': 'Special Defense'},
            {'name': 'Calm', 'increased_stat': 'Special Defense', 'decreased_stat': 'Attack'},
            {'name': 'Gentle', 'increased_stat': 'Special Defense', 'decreased_stat': 'Defense'},
            {'name': 'Sassy', 'increased_stat': 'Special Defense', 'decreased_stat': 'Speed'},
            {'name': 'Careful', 'increased_stat': 'Special Defense', 'decreased_stat': 'Special Attack'},
            {'name': 'Quirky', 'increased_stat': '', 'decreased_stat': ''}
        ]
        
        for nature_info in nature_data:
            Nature.objects.create(**nature_info)
        
        self.stdout.write(self.style.SUCCESS('Successfully seeded database with initial data!')) 