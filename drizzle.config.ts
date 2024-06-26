import 'dotenv/config';
import type {Config} from 'drizzle-kit';

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    driver: 'turso', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        url: process.env.TURSO_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
} satisfies Config;