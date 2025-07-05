# Nuzlocke.r

**Pokemon Nuzlocke Tracker by Aawab**

A comprehensive web application for tracking Pokemon Nuzlocke challenge runs, inspired by the popular nuzlocke.app. Built with modern Angular and Node.js technologies.

## 🎮 Features

### Core Functionality
- **Route-based Encounter Tracking**: Monitor Pokemon encounters by game location
- **Pokemon Status Management**: Track alive, dead, boxed, and released Pokemon
- **Nuzlocke Run Management**: Create and manage multiple challenge runs
- **Real-time Statistics**: View encounter counts, deaths, and team composition
- **Game Boy-inspired UI**: Authentic Pokemon aesthetic with custom styling

### Pokemon Management
- **Species Database**: Complete Pokemon data with types, stats, and abilities
- **Nature System**: Full nature tracking with stat modifications
- **Encounter History**: Detailed logging of all Pokemon encounters
- **Nickname Support**: Custom names for all captured Pokemon
- **Level Tracking**: Monitor Pokemon growth throughout the run

### Data Persistence
- **PostgreSQL Database**: Reliable data storage and retrieval
- **RESTful API**: Clean backend architecture for data management
- **Real-time Updates**: Instant UI updates with Angular signals
- **Data Migration**: Automated database setup and seeding

## 🛠️ Technology Stack

### Frontend
- **Angular 20**: Modern component-based architecture
- **TypeScript**: Type-safe development
- **Angular Signals**: Reactive state management
- **SCSS**: Custom styling with utility classes
- **RxJS**: Reactive programming patterns

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type-safe server development
- **PostgreSQL**: Database management
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing

### Development Tools
- **Angular CLI**: Project scaffolding and build tools
- **Nodemon**: Development server with hot reloading
- **Prettier**: Code formatting
- **ESLint**: Code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aawab/nuzlocke.r.git
   cd nuzlocke.r/nuzlocke-tracker
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install
   
   # Backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Database Setup**
   ```bash
   # Create database and run migrations
   npm run db:migrate
   
   # Seed with sample data
   npm run db:seed
   ```

4. **Environment Configuration**
   ```bash
   # Copy environment template
   cp backend/.env.example backend/.env
   
   # Edit database configuration
   nano backend/.env
   ```

### Development

**Start the development servers:**

```bash
# Terminal 1: Frontend (http://localhost:4200)
npm run dev

# Terminal 2: Backend (http://localhost:3001)
npm run backend
```

### Production Build

```bash
# Build frontend
npm run build

# Build backend
npm run build:backend
```

## 🎯 Usage

### Creating a New Run
1. Click "NEW GAME" on the main menu
2. Select your game version and rules
3. Begin tracking encounters by route

### Adding Encounters
1. Select a route from the sidebar
2. Click "Add Encounter"
3. Choose your Pokemon and set details
4. Confirm to add to your team

### Managing Pokemon
- **Game Tab**: View active team and route encounters
- **Box Tab**: Manage boxed Pokemon
- **Grave Tab**: Memorial for fallen team members

## 🔧 API Endpoints

### Pokemon
- `GET /api/pokemon` - Get all Pokemon
- `GET /api/pokemon/:id` - Get Pokemon by ID
- `GET /api/pokemon/routes/all` - Get all routes
- `GET /api/pokemon/natures/all` - Get all natures

### Runs
- `GET /api/runs` - Get all runs
- `POST /api/runs` - Create new run
- `GET /api/runs/:id` - Get run by ID

### Encounters
- `GET /api/encounters/:runId` - Get encounters for run
- `POST /api/encounters` - Create new encounter
- `PUT /api/encounters/:id` - Update encounter

## 📁 Project Structure

```
nuzlocke-tracker/
├── src/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   ├── data/               # Static data constants
│   │   ├── models/             # TypeScript interfaces
│   │   └── services/           # Angular services
│   ├── assets/                 # Static assets
│   └── styles.scss            # Global styles
├── backend/
│   ├── src/
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   └── scripts/           # Database scripts
│   └── package.json
└── README.md
```

## 🎨 Customization

### Adding New Pokemon
1. Update `src/app/data/pokemon.constants.ts`
2. Add sprite assets to `src/assets/sprites/`
3. Update database seed data

### Styling
- Global styles: `src/styles.scss`
- Component styles: `src/app/components/*/component.scss`
- Utility classes available for rapid development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Aawab** - Pokemon fan and developer

## 🙏 Acknowledgments

- Inspired by the original nuzlocke.app
- Pokemon data and sprites from official sources
- Community feedback and testing

---

*Built with ❤️ for the Pokemon Nuzlocke community*
