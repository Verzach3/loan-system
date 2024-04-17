import { relations } from "drizzle-orm";
import {pgTable, serial, text, timestamp, integer} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').unique().primaryKey(),
    name: text('name'),
    lastname: text('lastname'),
    email: text('email'),
    password: text('password'),
    role: text('role'),
    image: text('image')
});

export const request = pgTable('request', {
    id: serial('id').unique().primaryKey(),
    title: text('title'),
    description : text('description'),
    status: text('status'),
    created_at: timestamp('created_at').notNull().defaultNow(),
    user_id: integer('user_id'),
    resource_id: integer('resource_id').references(() => resources.id),
    classroom_id: integer('classroom_id').references(() => classroom.id),
});

export const usersRelation = relations(users, ({ many }) => ({
    users: many(users)
}));

export const requestRelation = relations(request, ({ one }) => ({
    author: one(users, {
        fields: [request.user_id],
        references: [users.id]
    })
}));


export const resources = pgTable('resources', {
    id: serial('id').unique().primaryKey(),
    title: text('title'),
    description : text('description'),
    image: text('image'),
    created_at: timestamp('created_at').notNull().defaultNow(),
    quantity: integer('quantity'),
});


export const classroom = pgTable('classroom', {
    id: serial('id').unique().primaryKey(),
    sede: text('name'),
    image : text('description'),
    capacity: integer('capacity'),
});
