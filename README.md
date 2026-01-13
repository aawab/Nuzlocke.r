# Nuzlocke.r 🎮⚡

A Pokemon Nuzlocke planner featuring team optimization tools and ML-driven battle analysis

## Overview

Nuzlocke.r is a Pokemon Nuzlocke challenge tracking with route-based encounter management, real-time team statistics, and comprehensive run analytics. 

![Nuzlocke.r Dashboard](./public/screenshots/dashboard.png)

## 🌟 Features

### 🗺️ **Route-Based Encounter Tracking**
Monitor Pokemon encounters by game location with dynamic route selection and encounter history visualization.

![Route Tracking](./public/screenshots/route-tracking.png)

### 👥 **Team Management Interface**
Manage your active Pokemon team with intuitive status updates, nickname support, and level tracking across Game, Box, and Grave tabs.

![Team Management](./public/screenshots/team-management.png)

### 📊 **Real-Time Statistics**
Track encounter rates, death counts, and team composition with live-updating statistics and progress indicators.

![Statistics Dashboard](./public/screenshots/statistics.png)

### 🎯 **Multi-Run Support**
Create and manage multiple Nuzlocke challenge runs with custom rules, game versions, and trainer configurations.

![Run Management](./public/screenshots/run-management.png)

### 🎨 **Game Boy-Inspired UI**
Authentic Pokemon aesthetic with custom styling, type-based color coding, and nostalgic Game Boy design elements.

![UI Design](./public/screenshots/ui-design.png)

### 🔄 **Angular Signals Architecture**
Modern reactive state management with Angular signals for real-time UI updates and efficient data handling.

![State Management](./public/screenshots/state-management.png)

## 📊 Data Sources

- **Pokemon Species Database**: Complete Pokemon data with types, abilities, base stats, and sprite references
- **Route Configuration**: Game location data with encounter pools and level ranges
- **Nature System**: Full nature database with stat modification tracking

## 🛠️ Tech Stack

### **Frontend**
- **Angular 20 + TypeScript**: Modern component-based architecture with signals
- **SCSS**: Custom styling with Pokemon-themed utility classes
- **Angular Signals**: Reactive state management for real-time updates
- **RxJS**: Reactive programming for HTTP communication

### **Backend**
- **Django REST Framework**: Python-based API with advanced ORM
- **PostgreSQL**: Relational database with array and JSON field support
- **Django Admin**: Built-in admin interface for data management
- **CORS**: Cross-origin resource sharing for frontend integration

### **Development**
- **Angular CLI**: Project scaffolding and build optimization
- **Django Management**: Database migrations and seeding commands
- **Python Virtual Environments**: Isolated dependency management

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/aawab/nuzlocke.r.git
cd nuzlocke.r

# Install frontend dependencies
npm install

# Start Angular development server
ng serve --open
```

Runs the app in development mode.
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Set up environment variables
cp env.example .env
# Edit .env with your PostgreSQL credentials

# Run database migrations
python manage.py migrate

# Seed initial Pokemon data
python manage.py seed_data

# Start Django server
python manage.py runserver
```

Backend runs on [http://localhost:8000](http://localhost:8000) with admin interface at `/admin/`.

## 📁 Project Structure

```
nuzlocke.r/
├── frontend/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   │   ├── game/           # Main game interface
│   │   │   └── main-menu/      # Landing page component
│   │   ├── data/               # Static Pokemon constants
│   │   ├── models/             # TypeScript interfaces
│   │   └── services/           # Angular services
│   ├── styles.scss             # Global styling
│   └── index.html              # Application shell
├── backend/
│   ├── pokemon/                # Pokemon species and routes
│   ├── runs/                   # Nuzlocke run management
│   ├── encounters/             # Pokemon encounter tracking
│   ├── nuzlocke_api/          # Django project configuration
│   ├── manage.py              # Django management script
│   └── requirements.txt       # Python dependencies
├── public/
│   ├── favicon.ico            # Application icon
│   └── screenshots/           # README images
└── angular.json               # Angular CLI configuration
```

## 🔧 Development Commands

```bash
# Frontend
ng serve --open           # Start Angular development server
npm run build       # Build for production
npm run watch       # Build with file watching

# Backend
npm run backend     # Start Django server
npm run db:migrate  # Run database migrations
npm run db:seed     # Seed initial data

# Combined Development
# Terminal 1: ng serve
# Terminal 2: npm run backend
```
---
