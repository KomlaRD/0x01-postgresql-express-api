import dotenv from "dotenv";
import { Pool } from "pg";

// Initialise the environment variable
dotenv.config();

// Enviroment variables
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env

// Initialise a database object called client
const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
})

// Export database object
export default client

