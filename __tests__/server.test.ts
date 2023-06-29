import request from "supertest";

import app from "../backend-ts/app";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "API is stable!" });
  });
});

describe("Server.ts tests", () => {
  test("Math test", () => {
    expect(2 + 2).toBe(4);
  });
});
