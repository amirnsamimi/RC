import {Router, Request, Response} from 'express';
import {z} from "zod"
import {users} from "./users.router";

interface IProgram {
    id: number;
    planId: number;
    title: string;
    description?: string;
}

const programSchema = z.object({
    planId: z.number(),
    title: z.string().min(1),
    description: z.string().min(1).optional(),
});

export const app: Router = Router();


app.post("/", ((req: Request, res: Response) => {
    const userId = req.headers.authorization;
    const logged = users.find((user) => user.id === userId);
    if (!logged) {
        return res.status(401).send({message: "unauthorized"});
    }
}))