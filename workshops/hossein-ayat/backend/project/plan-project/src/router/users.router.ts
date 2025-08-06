import { Router, Request, Response } from "express"
import { z } from "zod"
import {v4} from "uuid";
import {isNotEmptyString} from "../utilities/notEmptyString";

export const app: Router = Router()



type TRoles = "Admin" | "Representative" | "Normal";

interface IUser {
    id: string;
    username: string;
    password: string;
    role: TRoles;
}

const userSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
});

const users: IUser[] = [
    { id: v4(), username: "admin", password: "admin", role: "Admin" },
];

app.post("/login", (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!isNotEmptyString(username) && !isNotEmptyString(password)) {
        res.status(400).json({ message: "bad request" });
        return;
    }

    const parseResult = userSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(400).json({ message: parseResult.error.message });
        return;
    }

    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (!user) {
        res.status(401).json({ message: "Invalid username or password" });
        return;
    }

    return res.status(200).send({ ...user });
});

export { users }

