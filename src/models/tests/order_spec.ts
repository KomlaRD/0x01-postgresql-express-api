import { Order, OrderStore } from "../order";

// Instantiate a new user store
const store = new OrderStore();

// Suite test
describe("OrderStore", () => {
  // Check for the existence of the show method
  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  // Test the return value of the show method
  it("show method should return an order for particular user", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      order_id: 1,
      status: "complete",
      product_id: 1,
      user_id: 1,
    });
  });
});
