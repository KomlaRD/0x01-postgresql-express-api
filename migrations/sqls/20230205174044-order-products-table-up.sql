-- Create order-products table
CREATE TABLE order_products (id SERIAL PRIMARY KEY, quantity INTEGER, order_id INTEGER REFERENCES orders(order_id),
product_id INTEGER REFERENCES products(products_id));