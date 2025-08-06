import dotenv from "dotenv";

dotenv.config();
import express, {Response, Request, NextFunction, Express} from "express";
import {app as planRouter} from "./router/plan.router"
import {app as userRouter} from "./router/users.router"
import {app as programRouter} from "./router/program.router"

export const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Logging everytime a request comes in Test

if (process.env.NODE_ENV !== "TEST") {
    app.use((req: Request, res: Response, next: NextFunction) => {
        console.log(req.method, req.url);
        next();
    });
}

app.use("/plan", planRouter)
app.use(userRouter)
app.use("/program", programRouter)

// Not Found Middleware
app.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
});
