import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const insightsRouter = Router();

// Get all insights
insightsRouter.get('/', async (_req, res, next) => {
    try {
        const insights = await prisma.insightPost.findMany({
            orderBy: { date: 'desc' }
        });
        res.json(insights);
    } catch (error) {
        next(error);
    }
});

// Get single insight
insightsRouter.get('/:id', async (req, res, next) => {
    try {
        const insight = await prisma.insightPost.findUnique({
            where: { id: req.params.id }
        });
        if (!insight) {
            return res.status(404).json({ error: 'Insight not found' });
        }
        res.json(insight);
    } catch (error) {
        next(error);
    }
});

// Create insight
insightsRouter.post('/', async (req, res, next) => {
    try {
        const { title, excerpt, content, date, category, readTime, author } = req.body;

        const insight = await prisma.insightPost.create({
            data: {
                title,
                excerpt,
                content,
                date: new Date(date),
                category,
                readTime,
                author
            }
        });

        res.status(201).json(insight);
    } catch (error) {
        next(error);
    }
});

// Update insight
insightsRouter.put('/:id', async (req, res, next) => {
    try {
        const { title, excerpt, content, date, category, readTime, author } = req.body;

        const insight = await prisma.insightPost.update({
            where: { id: req.params.id },
            data: {
                title,
                excerpt,
                content,
                date: date ? new Date(date) : undefined,
                category,
                readTime,
                author
            }
        });

        res.json(insight);
    } catch (error) {
        next(error);
    }
});

// Delete insight
insightsRouter.delete('/:id', async (req, res, next) => {
    try {
        await prisma.insightPost.delete({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});
