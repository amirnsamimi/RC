import request from "supertest";
import {app} from "../src/api";

describe("program", () => {
    test("should fail if user is not logged in", async () => {

        await request(app).post("/program").expect(401);

    })
})