// Import modules
import app from "../../server";
import supertest from "supertest";
import order_routes from "../orders";


// App routes
const request = supertest(app.use(order_routes));

// Test server
describe("Test endpoint responses", () => {
  it("shows the order for a particular user", async () => {
    const response = await request.get("/orders/:id");
    expect(response.status).toBe(401); // response is 200 when authentication is successful 
  });
});
