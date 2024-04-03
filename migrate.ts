import 'dotenv/config';
import process from "process";
import {migrate} from "drizzle-orm/neon-http/migrator";
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

const sql = neon(process.env.NEON_URL!);
await migrate(drizzle(sql), { migrationsFolder: './drizzle' })