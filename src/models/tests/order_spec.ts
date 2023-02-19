import { OrderStore } from "../order";
import { ProductStore } from "../product";
import { UserStore } from "../user";

// Instantiate new stores
const store_order = new OrderStore();
const store_product = new ProductStore();
const store_user = new UserStore();

// Suite test
describe("OrderStore", () => {
  beforeAll(async () => {
    await store_product.create();
    await store_user.create({
      user_id: 1,
      password: "silenthour",
      first_name: "Eric",
      last_name: "Anku",
      username: "erico",
    });
    await store_order.create();
  });

  // Check for the existence of the show method
  it("should have a show method", () => {
    expect(store_order.show).toBeDefined();
  });

  // Test the return value of the show method
  it("show method should return an order for particular user", async () => {
    const result = await store_order.show("1");
    expect(result).not.toEqual({
      order_id: 1,
      status: "complete",
      product_id: 1,
      user_id: 1,
    });
  });
});
