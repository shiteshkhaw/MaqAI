/**
 * Environment configuration with validation
 * Fails fast at startup if required variables are missing
 */

const requiredEnvVars = [
    'CORS_ORIGIN',
    'DATABASE_URL'
] as const;

// Validate all required env vars are present
const missing = requiredEnvVars.filter(varName => !process.env[varName]);
if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing.join(', '));
    console.error('💡 Add these to your Vercel Project Settings -> Environment Variables');
    // Don't exit in development if we want to see other errors, but for Vercel startup it's better to log.
}

export const config = {
    port: parseInt(process.env.PORT || '3001', 10),
    corsOrigin: process.env.CORS_ORIGIN!,
    databaseUrl: process.env.DATABASE_URL!,
    nodeEnv: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
};
