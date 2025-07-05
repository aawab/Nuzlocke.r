# Nuzlocke.r Django Backend

Django REST Framework backend for the Nuzlocke.r Pokemon Nuzlocke Tracker application.

## Author
**Aawab** - Creator of Nuzlocke.r

## Features

- **RESTful API** - Complete REST API for Pokemon, Runs, and Encounters
- **PostgreSQL Database** - Robust database support with full CRUD operations
- **Django Admin** - Built-in admin interface for data management
- **CORS Support** - Cross-origin resource sharing for frontend integration
- **Data Seeding** - Management command to populate initial Pokemon data

## Prerequisites

- Python 3.8+
- PostgreSQL 12+
- pip (Python package manager)

## Installation

1. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your database credentials
   ```

4. **Create PostgreSQL database:**
   ```sql
   CREATE DATABASE nuzlocke_r;
   ```

5. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Seed initial data:**
   ```bash
   python manage.py seed_data
   ```

## Running the Server

### Development
```bash
python manage.py runserver
```

### Production
```bash
gunicorn nuzlocke_api.wsgi:application --bind 0.0.0.0:8000
```

## API Endpoints

### Health Check
- `GET /health/` - Server health status

### Pokemon
- `GET /api/pokemon/` - List all Pokemon
- `GET /api/pokemon/{id}/` - Get Pokemon by ID
- `GET /api/pokemon/routes/all/` - Get all routes
- `GET /api/pokemon/natures/all/` - Get all natures

### Runs
- `GET /api/runs/` - List all Nuzlocke runs
- `POST /api/runs/` - Create new run
- `GET /api/runs/{id}/` - Get run by ID
- `PUT /api/runs/{id}/` - Update run
- `DELETE /api/runs/{id}/` - Delete run

### Encounters
- `GET /api/encounters/` - List all encounters
- `POST /api/encounters/` - Create new encounter
- `GET /api/encounters/{id}/` - Get encounter by ID
- `PUT /api/encounters/{id}/` - Update encounter
- `DELETE /api/encounters/{id}/` - Delete encounter
- `GET /api/encounters/run/{run_id}/` - Get encounters for specific run

## Database Schema

### Pokemon
- `id` - Primary key
- `name` - Pokemon name
- `types` - Array of type names
- `abilities` - Array of ability names
- `base_stats` - JSON object with stat values
- `sprite_url` - URL to Pokemon sprite

### Routes
- `id` - UUID primary key
- `name` - Route name
- `category` - Route category (starter, route, city, cave, etc.)
- `level_range` - JSON object with min/max levels
- `pokemon_pool` - Array of Pokemon IDs available

### Natures
- `name` - Nature name (primary key)
- `increased_stat` - Stat that increases
- `decreased_stat` - Stat that decreases

### Nuzlocke Runs
- `id` - UUID primary key
- `game_name` - Name of the Pokemon game
- `trainer_name` - Trainer's name
- `rules` - Array of Nuzlocke rules
- `created_at` - Creation timestamp
- `is_active` - Whether run is active

### Encounters
- `id` - UUID primary key
- `run_id` - Reference to Nuzlocke run
- `pokemon_id` - Reference to Pokemon
- `nickname` - Pokemon's nickname
- `level` - Pokemon's level
- `nature` - Pokemon's nature
- `ability` - Pokemon's ability
- `status` - alive, dead, boxed, or released
- `location` - Where Pokemon was encountered
- `route` - Route identifier
- `caught` - Whether Pokemon was caught
- `date_encountered` - When encounter happened

## Administration

Access the Django admin at `/admin/` to manage data through the web interface.

## Development Commands

```bash
# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Seed database with initial data
python manage.py seed_data

# Run development server
python manage.py runserver

# Run tests
python manage.py test
```

## Environment Variables

Create a `.env` file based on `env.example`:

```
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DB_NAME=nuzlocke_r
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

## License

This project is created by **Aawab** as part of the Nuzlocke.r application suite.

---

**Nuzlocke.r** - Pokemon Nuzlocke Tracker by Aawab 