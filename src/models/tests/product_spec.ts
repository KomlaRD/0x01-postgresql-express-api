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
      { products_id: 2, name: "book", price: "1000", category: "stationery" },
      { products_id: 3, name: "book", price: "1000", category: "stationery" },
      { products_id: 4, name: "book", price: "1000", category: "stationery" },
      { products_id: 5, name: "book", price: "1000", category: "stationery" },
      { products_id: 6, name: "book", price: "1000", category: "stationery" },
      { products_id: 7, name: "book", price: "1000", category: "stationery" },
      { products_id: 8, name: "book", price: "1000", category: "stationery" },
      { products_id: 9, name: "book", price: "1000", category: "stationery" },
      { products_id: 10, name: "book", price: "1000", category: "stationery" },
      { products_id: 11, name: "book", price: "1000", category: "stationery" },
      { products_id: 12, name: "book", price: "1000", category: "stationery" },
      { products_id: 13, name: "book", price: "1000", category: "stationery" },
      { products_id: 14, name: "book", price: "1000", category: "stationery" },
      { products_id: 15, name: "book", price: "1000", category: "stationery" },
      { products_id: 16, name: "book", price: "1000", category: "stationery" },
      { products_id: 17, name: "book", price: "1000", category: "stationery" },
      { products_id: 18, name: "book", price: "1000", category: "stationery" },
      { products_id: 19, name: "book", price: "1000", category: "stationery" },
      { products_id: 20, name: "book", price: "1000", category: "stationery" },
      { products_id: 21, name: "book", price: "1000", category: "stationery" },
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
  it("create method should successfull add a new product to store when authenticated", async () => {
    const result = await store.create();
    expect(result).toEqual(
      { products_id: 7, name: 'book', price: '1000', category: 'stationery' },
    );
  });
});