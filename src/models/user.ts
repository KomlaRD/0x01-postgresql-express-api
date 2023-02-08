import client from "../database";

// Create a type for the rows in the users table
export type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  password: string;
};

// Create a class to represent rows in the users table
export class UserStore {
  // Model method to read all the users in the database [token required]
  async index(): Promise<User[]> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to run on the products table
      const sql = "SELECT * FROM users";
      // Run query on the database
      const result = await conn.query(sql);
      // Close the connection
      conn.release();
      // Return the products
      return result.rows;
    } catch (error) {
      throw new Error(`Query for all users failed: ${error}`);
    }
  }

  // Model method to show a particular user [token required]
  async show(id: string): Promise<User> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to show a user
      const sql = "SELECT * FROM users WHERE id = " + id;
      // Run query on the database
      const result = await conn.query(sql, [id]);
      const user = result.rows[0];
      // Close the connection
      conn.release();
      // Return the product created
      return user;
    } catch (error) {
      throw new Error(`User was not found: ${error}`);
    }
  }

  // Model method to create a new user [token required]
  async create(u: User): Promise<User> {
    try {
      // Connect to database
      const conn = await client.connect();
      // SQL query to create a new user
      const sql =
        'INSERT INTO users(firstName, lastName, password) VALUES("Eric", "Anku", "silenthour") RETURNING *';
      // Run query on the database
      const result = await conn.query(sql, [u.first_name, u.last_name, u.password]);
      const user = result.rows[0];
      // Close the connection
      conn.release();
      // Return the user created
      return user;
    } catch (error) {
      throw new Error(`User was not created: ${error}`);
    }
  }
}
