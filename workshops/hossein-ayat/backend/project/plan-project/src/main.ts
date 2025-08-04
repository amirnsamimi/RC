import dotenv from "dotenv";

dotenv.config();
import express, {Response, Request, NextFunction} from "express"
import {z} from "zod";


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Logging everytime a request comes in
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url);
    next();
})


// Plans
interface IPlan {
    id: number;
    title: string;
    description?: string;
}
const planSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1).optional()
})
const plans: IPlan[] = [];
app.post("/plan", (req: Request, res: Response) => {
    const {title, description} = req.body
    if (req.body.title === undefined) {
        res.status(400).json({message: "Please enter a title"});
        return;
    }
    const parseResult = planSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(400).json({message: parseResult.error.message});
        return;
    }
    const plan: IPlan = {id: plans.length + 1, title, description}
    plans.push(plan)
    res.status(200).send({message: `Plan with id ${plan.id} added successfully.`})
})

app.get("/plan/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    if (Number.isNaN(id)) {
        res.status(400).json({message: "Please enter a valid id"});
        return;
    }
    const plan = plans.find(plan => plan.id === id)
    if (!plan) {
        res.status(404).json({message: "Plan not found"})
        return;
    }
    res.status(200).send(plan)
})


// Not Found Middleware
app.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
})
// Server Port Opening
app.listen(process.env.LISTENING_PORT, () => {
    console.log("server running on port", process.env.LISTENING_PORT);

})
