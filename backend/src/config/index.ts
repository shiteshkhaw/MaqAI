/**
 * Environment configuration with validation
 * Fails fast at startup if required variables are missing
 */

const requiredEnvVars = [
    'PORT',
    'CORS_ORIGIN',
    'DATABASE_URL'
] as const;

// Validate all required env vars are present
const missing = requiredEnvVars.filter(varName => !process.env[varName]);
if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing.join(', '));
    console.error('💡 Copy backend/.env.example to backend/.env and fill in the values');
    process.exit(1);
}

export const config = {
    port: parseInt(process.env.PORT!, 10),
    corsOrigin: process.env.CORS_ORIGIN!,
    databaseUrl: process.env.DATABASE_URL!,
    nodeEnv: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
};
