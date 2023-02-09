-- Create users table
CREATE TABLE users (user_id SERIAL PRIMARY KEY, first_name VARCHAR(150), last_name VARCHAR(150), password VARCHAR);

-- Add a new column called username
ALTER TABLE users ADD COLUMN (username); 