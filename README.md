# Makhija Quantum AI

A duorepo containing the frontend website and backend API for Makhija Quantum AI.

## Structure

```
├── frontend/         # React + Vite + TypeScript
├── backend/          # Express + Prisma + PostgreSQL
```

## Quick Start

### 1. Update Database Credentials

Edit `backend/.env` and set your PostgreSQL password:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/maqai?schema=public"
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run db:push      # Create tables in database
npm run db:generate  # Generate Prisma client
npm run dev          # Start backend server on port 3001
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev          # Start frontend on port 3000
```

### 4. Open in Browser

Visit http://localhost:3000

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, TypeScript, TailwindCSS, Framer Motion |
| Backend | Express.js, TypeScript, Prisma ORM |
| Database | PostgreSQL |
