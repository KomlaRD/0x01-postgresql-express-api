import client from "../database";

// Create a type for the rows in the orders table
export type Order = {
  order_id: number;
  product_id: number;
  user_id: number;
  status: string;
};

// Create a class to represent rows in the users table
export class OrderStore {
  // Model method to show the order of a particular user [token required]
  async show(id: string): Promise<Order> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to show an order
      const sql = "SELECT * FROM orders WHERE user_id = user_id";
      // Run query on the database
      const result = await conn.query(sql, []);
      const order = result.rows[0];
      // Close the connection
      conn.release();
      // Return the product created
      return order;
    } catch (error) {
      throw new Error(`Order was not found: ${error}`);
    }
  }
  
  // Create order for testing purposes
  async create(): Promise<Order> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to create a new product
      const sql = `INSERT INTO orders (status, product_id, user_id) VALUES ('complete', 1, 1) RETURNING *`;
      // Run query on the database
      const result = await conn.query(sql, []);
      const order = result.rows[0];
      // Close the connection
      conn.release();
      // Return the order created
      return order;
    } catch (error) {
      throw new Error(`Order was not created: ${error}`);
    }
  }
}
