import request from "supertest";
import { app } from "../src/api";
import { addPlan, login } from "./utilities";

const today = new Date();
const tomorrow = new Date(today.setDate(today.getDate() + 1));
describe("creating plan", () => {
  test("should response with 400 if title is not provided", async () => {
    const user = await login();
    await request(app).post("/plan").set("Authorization", user.id).send({
      description: "plan 2 is awesome",
    });
  });

  test("failed if user is not logged in", async () => {
    // promise in return
    await request(app).post("/plan").expect(401);
  });

  test("should create a plan if we are logged in", async () => {
    const user = await login();
    const plan = await addPlan(user.id, tomorrow.toISOString());
    expect(plan.title).toBe("plan 2");
  });

  test("get plan by id", async () => {
    const user = await login();
    const plan = await addPlan(user.id, tomorrow.toISOString());
    const { body: plan2 } = await request(app)
      .get(`/plan/${plan.id}`)
      .expect(200);

    console.log(plan2);
  });
});
