import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

// Initialise environment variables
dotenv.config();

const  {
  BCRYPT_PASSWORD,
  SALT_ROUNDS,
} = process.env

// Create a type for the rows in the users table
export type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  username: string | null,
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
      const sql = "SELECT * FROM users WHERE user_id = " + id;
      // Run query on the database
      const result = await conn.query(sql, []);
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
      const sql = `INSERT INTO users(first_name, last_name, username, password) VALUES ('Eric', 'Anku', 'erico', 'silenthour') RETURNING *`;
      const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS as string)
      );

      // Run query on the database
      const result = await conn.query(sql, [u.username, hash]);
      const user = result.rows[0];
      // Close the connection
      conn.release();
      // Return the user created
      return user;
    } catch (error) {
      throw new Error(`User was not created: ${error}`);
    }
  }

  // Authenticate method
  async authenticate(
    username: string,
    password: string
  ): Promise<User | null> {
    const conn = await client.connect();
    const sql = `SELECT password FROM users WHERE username='Eric'`;
    const result = await conn.query(sql, [username]);

    console.log(password + BCRYPT_PASSWORD);

    if (result.rows.length) {
      const user = result.rows[0];
      console.log(user);

      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
        return user;
    }
  }
  return null;
}
}
