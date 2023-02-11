import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("Test endpoint response", () => {
    it("should get response from server", async() => {
        const response = await request.get("/");
        expect(response.statusCode).toBe(200);
    });
});