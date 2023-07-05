import request from "supertest";
import app from "../backend-ts/app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();

  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("Test server", () => {
  it("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "API is stable!" });
  });

  describe("Product Routes", () => {
    it("Get all products", async () => {
      const res = await request(app).get("/api/products");
      expect(res.body.length).toBe(0);
      // res.body.forEach(product => {
      //   expect(typeof product.name).toBe("string");
      //   expect(typeof product._id).toBe("string");
      // });
    });

    it("Responds with a null if product is not found", () => {
      return request(app)
        .get("/api/products/5eb78994dbb89024f04a2507")
        .then(response => {
          expect(response.body).toBe(null);
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
      const res = await request(app).get("api/users");
      expect(res.body).toEqual({});
    });
  });

  describe("Server.ts tests", () => {
    it("Math test", () => {
      expect(2 + 2).toBe(4);
    });
  });
});
