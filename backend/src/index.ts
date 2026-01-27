import 'dotenv/config'; // Load env vars before any other imports
import express from 'express';
import cors from 'cors';

// Import config AFTER dotenv so validation has access to env vars
import { config } from './config/index.js';
import { contactRouter } from './routes/contact.js';
import { productsRouter } from './routes/products.js';
import { insightsRouter } from './routes/insights.js';
import { chatbotAIRouter } from './routes/chatbotAI.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors({
    origin: config.corsOrigin,
    credentials: true
}));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/contact', contactRouter);
app.use('/api/products', productsRouter);
app.use('/api/insights', insightsRouter);
app.use('/api/chatbot', chatbotAIRouter);

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`🚀 Server running on http://localhost:${config.port}`);
});

export default app;
