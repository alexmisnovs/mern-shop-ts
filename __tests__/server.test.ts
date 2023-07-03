import request from "supertest";
import app from "../backend-ts/server";
import { IProduct } from "../backend-ts/types/types";

describe("Test server", () => {
  it("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "API is stable!" });
  });
});

describe("Product Routes", () => {
  it("Get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.body.length).toBe(6);
    res.body.forEach((product: IProduct) => {
      expect(typeof product.name).toBe("string");
      expect(typeof product._id).toBe("string");
    });
  });
  it("responds with status 200 the GET method", () => {
    return request(app)
      .get("/api/products")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("User routes", () => {
  it("Get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual(["Goon", "Tsuki", "Joe"]);
  });
});

describe("Server.ts tests", () => {
  it("Math test", () => {
    expect(2 + 2).toBe(4);
  });
});
