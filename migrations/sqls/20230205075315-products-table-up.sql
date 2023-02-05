CREATE TABLE products (product_id SERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(100),
  price DECIMAL,
  category VARCHAR(100));