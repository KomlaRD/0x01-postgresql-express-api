# Storefront Backend Project

## Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## RESTful endpoints

- See `http://localhost:3000/api-docs` for openapi documentation

### Products

- An INDEX route: '/products' [GET]
- A SHOW route: 'products/:id' [GET]
- A CREATE route: 'products' [POST]

### Users

- An INDEX route: '/users' [GET]
- A SHOW route: 'users/:id' [GET]
- A CREATE route: 'users' [POST]

### Orders

- A SHOW route: 'orders/:id' [GET]

## Database setup

- CREATE DATABASE store;
- CREATE DATABASE store_test; [testing]

## Database port number

- PORT: 5432

### User

- CREATE USER postgres WITH PASSWORD "passwordtrial";
- GRANT ALL PRIVILEGES ON DATABASE store TO postgres;
- GRANT ALL PRIVILEGES ON DATABASE store_test TO postgres;

## Database tables

- Table: products (products_id SERIAL PRIMARY KEY, name VARCHAR(100), price DECIMAL, category VARCHAR(150));

- Table: users (user_id SERIAL PRIMARY KEY, first_name VARCHAR(150), last_name VARCHAR(150), password VARCHAR);

- Table: orders (order_id SERIAL PRIMARY KEY, status VARCHAR(20), product_id INTEGER REFERENCES products(products_id),
user_id INTEGER REFERENCES users(user_id));

## ENV variables

- POSTGRES_HOST
- POSTGRES_DB
- POSTGRES_TEST_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- ENV
- BCRYPT_PASSWORD
- SALT_ROUNDS
- TOKEN_SECRET
