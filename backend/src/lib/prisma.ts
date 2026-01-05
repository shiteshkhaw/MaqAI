import { PrismaClient } from '@prisma/client';

// Create a single PrismaClient instance
// Prisma 5 automatically handles SSL for RDS when ?sslmode=require is in DATABASE_URL
const prisma = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export { prisma };
export default prisma;

