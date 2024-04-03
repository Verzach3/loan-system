import * as process from "process";
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/neon-http';
import {neon} from "@neondatabase/serverless";

// for migrations

// for query purposes
const sql = neon(process.env.NEON_URL!)
export const db = drizzle(sql, { schema });