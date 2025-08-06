import request from "supertest";
import {app} from "../src/api";

describe("creating plan", () => {
    test("failed if user is not logged in", async () => {
        // promise in return
        await request(app).post("/plan").expect(401);
    });

    test("should create a plan if we are logged in", async () => {
        const {body: user} = await request(app)
            .post("/login")
            .send({username: "admin", password: "admin"})
            .expect(200);
        const {body: plan} = await request(app)
            .post("/plan")
            .set("Authorization", user.id)
            .send({
                title: "plan 2",
                description: "plan 2 is awsome",
            })
            .expect(200);
        expect(plan.title).toBe("plan 2")

    });
});

describe("getting plan", () => {
    test("get plan by id", async () => {

        const {body: user} = await request(app)
            .post("/login")
            .send({username: "admin", password: "admin"})
            .expect(200);


        const {body: plan} = await request(app)
            .post("/plan")
            .set("Authorization", user.id)
            .send({
                title: "plan 2",
                description: "plan 2 is awesome",
            })
            .expect(200);
        const {body: plan2} = await request(app)
            .get(`/plan/${plan.id}`)
            .expect(200);

        console.log(plan2)

    })


})