## Local Setup

### Prerequisites
- Node.js
- PostgreSQL (PgAdmin or Neon)
- Clerk account at [clerk.com](https://clerk.com)

---

### 1. Clone the repository

```bash
git clone https://github.com/bh3nry/COMP-4002-Capstone-MB-Fragrance-Guide.git
cd COMP-4002-Capstone-MB-Fragrance-Guide
```

### 2. Install dependencies

From the root of the project:

```bash
npm install
```

---

### 3. Environment variables

Create the following `.env` files:

**`app/frontend/.env`**
```dotenv
VITE_API_BASE_URL=
VITE_CLERK_PUBLISHABLE_KEY=
```

**`app/backend/.env`**
```dotenv
PROD_DB_URL=
FRONTEND_URL=
CLERK_SECRET_KEY=
```

---

### 4. Database setup

From the `app/backend/` folder, run migrations to create the database tables:

```bash
cd app/backend
npx prisma migrate dev
```

Then seed the database with initial data:

```bash
npx prisma db seed
```

---

### 5. Run the application

From the root of the project, run both the frontend and backend together:

```bash
npm run dev
```