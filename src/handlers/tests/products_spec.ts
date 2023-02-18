// Import modules
import app from "../../server";
import supertest from "supertest";
import products_route from "../products";

const request = supertest(app.use(products_route));;

// Test enpoint for products routes
describe("Test endpoint responses", () => {
  it("gets all products", async () => {
    const response = await request.get("/products");
    expect(response.status).toBe(200);
  });

  it("gets a particular product", async() => {
    const response = await request.get("/products/:id");
    expect(response.status).toBe(200);
  })

  it("posts a new product", async () => {
    const response = await request.post("/products")
    expect(response.status).toBe(401); // response is 200 when authenticated
  });
});
