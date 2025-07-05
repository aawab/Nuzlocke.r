# Environment Setup - Nuzlocke.r

**Backend Environment Configuration by Aawab**

Create a `.env` file in the backend directory with the following configuration:

```env
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nuzlocke_r
DB_USER=postgres
DB_PASSWORD=password
```

## PostgreSQL Setup

1. Install PostgreSQL on your system
2. Create a database named `nuzlocke_r`
3. Update the `.env` file with your database credentials
4. Run migrations: `npm run db:migrate`
5. Seed initial data: `npm run db:seed`

## Additional Configuration

- The backend API will run on port 3001 by default
- Make sure PostgreSQL service is running before starting the backend
- Database tables will be created automatically when running migrations

---

*Part of Nuzlocke.r - Pokemon Nuzlocke Tracker by Aawab* 