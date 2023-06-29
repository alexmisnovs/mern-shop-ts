import request from "supertest";

import app from "../../backend-ts/app";

describe("Product Routes", () => {
  test("Get all products", async () => {
    const res = await request(app).get("/products");
    expect(res.body.length).toEqual(6);
  });
});
