import dotenv from "dotenv";
import { Pool } from "pg";

// Initialise the environment variable
dotenv.config();

// Enviroment variables
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV
} = process.env

let client;

console.log(ENV);

// Test database
if (ENV === 'test') {
    client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,

    })
};

// Development database
if (ENV === 'dev') {
    client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})
};

// Export database object
export default client

