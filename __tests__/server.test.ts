import request from "supertest";
import app from "../backend-ts/app";

describe("Server", () => {
  describe("Server", () => {
    it("Responds with a message", async () => {
      const res = await request(app).get("/");
      expect(res.body).toEqual({ message: "API is stable!" });
    });
  });
  describe("Health Check", () => {
    it("should return 200", async () => {
      await request(app).get("/").expect(200);
    });
  });

  describe("Math test", () => {
    it("adds 2 and 2 and gets 4", () => {
      expect(2 + 2).toBe(4);
    });
  });
});
