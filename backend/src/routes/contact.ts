import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const contactRouter = Router();

// Submit contact form
contactRouter.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const contact = await prisma.contact.create({
            data: {
                firstName,
                lastName,
                email,
                message
            }
        });

        res.status(201).json({ success: true, id: contact.id });
    } catch (error) {
        next(error);
    }
});

// Get all contact submissions (admin)
contactRouter.get('/', async (_req, res, next) => {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(contacts);
    } catch (error) {
        next(error);
    }
});
