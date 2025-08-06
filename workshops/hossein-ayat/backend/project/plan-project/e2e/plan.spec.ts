import request from "supertest";
import { app } from "../src/main";

describe("craeting plan", () => {
  it("failed if user is not logged in", () => {
    // promise in return
    return request(app).post("/plan").expect(401)
  });
});
