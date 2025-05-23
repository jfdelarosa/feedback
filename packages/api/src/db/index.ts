import { drizzle as drizzlePostgres } from 'drizzle-orm/node-postgres';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import * as schema from './schema';


export const db = drizzlePostgres(process.env.DATABASE_URL!, { schema });