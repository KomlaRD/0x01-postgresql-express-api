import verifyAuthToken from "../../middleware/authenticate";
import { User, UserStore } from "../user";

// Instantiate a new user store
const store = new UserStore();

// Suite test
describe("UserStore", () => {
  // Check fot the existence of the index method
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  // Test the return value of the index method
  it("index method should return a list of users", async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        user_id: 1,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: null,
      },
      {
        user_id: 2,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: null,
      },
      {
        user_id: 3,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: null,
      },
      {
        user_id: 4,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 5,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 6,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 7,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 8,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 9,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 10,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
      {
        user_id: 11,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
    ]);
  });

  // Check for the existence of the show method
  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  // Test the return value of the show method
  it("show method should return a particular user", async () => {
    const result = await store.show("1");
    expect(result).toEqual(
    {user_id: 1, first_name: "Eric", last_name: "Anku", password: "silenthour", username: null});
  });

  // Check fot the existence of the create method
  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });

  // Test for creating a new user
  it("create method should successfully create a new user", async () => {
    const result = await store.create({user_id: 11,password: "silenthour", first_name: "Eric", last_name: "Anku", username: "erico"}
    );
    expect(result).toEqual(
      {
        user_id: 11,
        first_name: "Eric",
        last_name: "Anku",
        password: "silenthour",
        username: "erico",
      },
    );
  });
});
