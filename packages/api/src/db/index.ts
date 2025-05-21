import { drizzle as drizzlePostgres } from 'drizzle-orm/node-postgres';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import * as schema from './schema';


let db;

if (process.env.NODE_ENV === 'production') {
    db = drizzlePostgres(process.env.DATABASE_URL!, { schema });
} else {
    db = drizzleNeon(process.env.DATABASE_URL!, { schema });
}

export {
    db
}