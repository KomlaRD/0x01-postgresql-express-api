import client from "../database";

// Create a type for the rows in the products table
export type Product = {
    products_id: number;
    name: string;
    price: number | string;
    category: string;
}

// Create a class to represent rows in the products table
export class ProductStore {
  // Model method to read all the products in the database
  async index(): Promise<Product[]> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to run on the products table
      const sql = 'SELECT * FROM products';
      // Run query on the database
      const result = await conn.query(sql);
      // Close the connection
      conn.release();
      // Return the products
      return result.rows;
    } catch (error) {
      throw new Error(`Query for all products failed: ${error}`);
    }
  }

  // Model method to show a product
  async show(id: string): Promise<Product> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to show a particular product
      const sql = 'SELECT * FROM products WHERE products_id = products_id';
      // Run query on the database
      const result = await conn.query(sql, []);
      const product = result.rows[0];
      // Close the connection
      conn.release();
      // Return the product created
      return product;
    } catch (error) {
      throw new Error(`Product was not found: ${error}`);
    }
  }

  // Model method to create a new product
  async create(): Promise<Product> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to create a new product
      const sql =
        `INSERT INTO products (name, price, category) VALUES ('book', 1000, 'stationery') RETURNING *`;
      // Run query on the database
      const result = await conn.query(sql, []);
      const product = result.rows[0];
      // Close the connection
      conn.release();
      // Return the product created
      return product;
    } catch (error) {
      throw new Error(`Product was not created: ${error}`);
    }
  }
}