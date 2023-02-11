import { Product, ProductStore } from "../product";

// Instantiate a new product store
const store = new ProductStore();

// Suite test
describe("ProductStore", () => {
  // Check fot the existence of the index method
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  // Test the return value of the index method
  it("index method should return a list of products", async () => {
    const result = await store.index();
    expect(result).toEqual([
      { products_id: 1, name: "coffee", price: "500", category: "food" },
    ]);
  });

  // Check fot the existence of the show method
  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  // Test the return value of the show method
  it("show method should return a particular product", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      products_id: 1,
      name: "coffee",
      price: "500",
      category: "food",
    });
  });

  // Check fot the existence of the create method
  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });

  // Test for creating a new product
  it("create method should successfull add a new product to store", async () => {
    const result = await store.create;
    expect(result).toEqual([]);
  });
});