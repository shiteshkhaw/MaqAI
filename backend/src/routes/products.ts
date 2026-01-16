import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const productsRouter = Router();

// Get all products
productsRouter.get('/', async (_req, res, next) => {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// Get single product
productsRouter.get('/:id', async (req, res, next) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: req.params.id }
        });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Create product
productsRouter.post('/', async (req, res, next) => {
    try {
        const { name, tagline, description, features, icon, status, link } = req.body;

        const product = await prisma.product.create({
            data: { name, tagline, description, features, icon, status, link }
        });

        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
});

// Update product
productsRouter.put('/:id', async (req, res, next) => {
    try {
        const { name, tagline, description, features, icon, status, link } = req.body;

        const product = await prisma.product.update({
            where: { id: req.params.id },
            data: { name, tagline, description, features, icon, status, link }
        });

        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Delete product
productsRouter.delete('/:id', async (req, res, next) => {
    try {
        await prisma.product.delete({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});
