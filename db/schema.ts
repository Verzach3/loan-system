import {pgTable, serial, text} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').unique().primaryKey(),
    name: text('name'),
    email: text('email'),
});