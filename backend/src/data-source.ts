import { DataSource } from 'typeorm';
import { DetailedProject } from './entity/DetailedProject';
import dotenv from 'dotenv';
dotenv.config()

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "portfolio_db",
    synchronize: true,
    logging: false,
    entities:[DetailedProject],
    subscribers: [],
    migrations: [],
})
