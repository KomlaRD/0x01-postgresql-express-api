import client from "../database";

// Create a type for the rows in the orders table
export type Order = {
  order_id: number;
  product_id: number;
  user_id: string;
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
      const sql = "SELECT * FROM orders WHERE user_id = " + id;
      // Run query on the database
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      // Close the connection
      conn.release();
      // Return the product created
      return order;
    } catch (error) {
      throw new Error(`Order was not found: ${error}`);
    }
  }
}
