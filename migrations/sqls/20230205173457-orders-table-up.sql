-- Create orders table
CREATE TABLE orders (order_id SERIAL PRIMARY KEY, status VARCHAR(20), product_id INTEGER REFERENCES products(products_id),
user_id INTEGER REFERENCES users(user_id));