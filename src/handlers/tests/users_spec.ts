// Import modules
import app from "../../server";
import supertest from "supertest";
import user_routes from "../users";

// App routes
const request = supertest(app.use(user_routes));

// Test endpoint routes
describe("Test endpoint responses", () => {
  it("gets all users if aunthenticated", async () => {
    const response = await request.get("/users");
    expect(response.status).toBe(401);
  });

  it("gets a particular user if auntheticated", async () => {
    const response: any = await request.get("/users/:id");
    expect(response.status).toBe(401);
  });

  it("creates a new user if auntheticated", async () => {
    const response = await request.post("/users");
    expect(response.status).toBe(401);
  });
});
