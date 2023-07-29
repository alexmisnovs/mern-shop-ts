import request from "supertest";
import supertest from "supertest";
import app from "../backend-ts/app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import productModel, { IProduct, IProductInput } from "../backend-ts/models/productModel";

const mockUserId = new mongoose.Types.ObjectId().toString();

const mockedProduct: IProductInput = {
  user: mockUserId,
  name: "Amazon Echo Dot 3rd Generation",
  image: "/images/alexa.jpg",
  description:
    "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
  brand: "Amazon",
  category: "Electronics",
  price: 29.99,
  countInStock: 0,
  rating: 4,
  numReviews: 12,
};

// testing with mongoose in memory db
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

describe("Product", () => {
  describe("Product Routes", () => {
    describe("Given there are 2 products in the DB", () => {
      it("It should return an array with 2 objects", async () => {
        // create couple of products first
        const product1 = await productModel.create(mockedProduct);
        const product2 = await productModel.create(mockedProduct);

        // lets create couple of products first? Or should I use the before all
        const { body, statusCode } = await supertest(app).get(`/api/products`);
        // console.log(body);
        expect(statusCode).toBe(200);
        expect(body.length).toBe(2);

        body.forEach(prod => {
          expect(typeof prod.name).toBe("string");
          expect(typeof prod._id).toBe("string");
        });
      });

      it("Responds with a null if product is not found", () => {
        return request(app)
          .get("/api/products/5eb78994dbb89024f04a2507")
          .then(response => {
            expect(response.body).toEqual({ message: "Product not found" });
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
  });
  // create couple of products first
  describe("get product route", () => {
    describe("given the product does not exist: ", () => {
      it("should return a 404 and a message", async () => {
        const productId = new mongoose.Types.ObjectId().toString();

        const { body, statusCode } = await supertest(app).get(`/api/products/${productId}`);
        expect(statusCode).toBe(404);
        expect(body.message).toBe("Product not found");
      });
    });

    describe("given the product does exist: ", () => {
      // create product first

      it("should return a 200 status and a product", async () => {
        // create product from a mocked product
        const product = await productModel.create(mockedProduct);

        const productId = product._id;

        const { body, statusCode } = await supertest(app).get(`/api/products/${productId}`);

        expect(statusCode).toBe(200);
        expect(body.name).toBe(product.name);
      });
    });
  });
});
