import request from "supertest";
import {app} from "../src/api";

describe("creating plan", () => {

    const login = async () => {
        const {body: user} = await request(app)
            .post("/login")
            .send({username: "admin", password: "admin"})
            .expect(200);
        return user;
    }

    const addPlan = async (userId: string) => {
        const {body: plan} = await request(app)
            .post("/plan")
            .set("Authorization", userId)
            .send({
                title: "plan 2",
                description: "plan 2 is awesome",
                deadline: new Date().toTimeString(),
            })
            .expect(200);
        return plan
    }

    test("should response with 400 if title is not provided", async () => {
        const user = await login();
        await request(app)
            .post("/plan")
            .set("Authorization", user.id)
            .send({
                description: "plan 2 is awesome",
            })
    })


    test("failed if user is not logged in", async () => {
        // promise in return
        await request(app).post("/plan").expect(401);
    });

    test("should create a plan if we are logged in", async () => {
        const user = await login();
        const plan = await addPlan(user.id);
        expect(plan.title).toBe("plan 2")
    });

    test("get plan by id", async () => {
        const user = await login();
        const plan = await addPlan(user.id);
        const {body: plan2} = await request(app)
            .get(`/plan/${plan.id}`)
            .expect(200);

        console.log(plan2)
    })
});
