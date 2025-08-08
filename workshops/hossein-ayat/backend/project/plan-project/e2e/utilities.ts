import request from "supertest";
import { app } from "../src/api";

const login = async () => {
  const { body: user } = await request(app)
    .post("/login")
    .send({ username: "admin", password: "admin" })
    .expect(200);
  return user;
};

const addPlan = async (userId: string, deadline: string) => {
  const { body: plan } = await request(app)
    .post("/plan")
    .set("Authorization", userId)
    .send({
      title: "plan 2",
      description: "plan 2 is awesome",
      deadline: deadline,
    })
    .expect(200);
  return plan;
};

export { login, addPlan };
