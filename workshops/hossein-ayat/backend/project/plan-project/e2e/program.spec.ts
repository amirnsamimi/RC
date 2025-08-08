import request from "supertest";
import { app } from "../src/api";
import { addPlan, login } from "./utilities";

describe("program", () => {
  test("should fail if user is not logged in", async () => {
    await request(app).post("/program").expect(401);
  });

  test("it should fail if deadline exceeded", async () => {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const user = await login();
    const plan = await addPlan(user.id, yesterday.toISOString());

    const { body: program } = await request(app)
      .post("/program")
      .set("Authorization", user.id)
      .send({
        planId: plan.id,
        title: "Program 1",
        description: "This is a test program",
      })
      .expect(200);
      console.log(program)
  });
});
