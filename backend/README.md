# Backend

Makhija Quantum AI Backend API built with Express, TypeScript, and Prisma.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update `.env` with your PostgreSQL credentials:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/maqai?schema=public"
```

3. Create the database and push the schema:
```bash
npm run db:push
```

4. Generate Prisma client:
```bash
npm run db:generate
```

5. Start the development server:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List all contacts |
| GET | `/api/products` | List all products |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/insights` | List all insights |
| POST | `/api/insights` | Create insight |
| PUT | `/api/insights/:id` | Update insight |
| DELETE | `/api/insights/:id` | Delete insight |
