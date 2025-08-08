import { Router, Request, Response } from "express";
import { z } from "zod";
import { users } from "./users.router";
import { isNotEmptyString } from "../utilities/notEmptyString";

interface IPlan {
  id: number;
  title: string;
  description?: string;
  deadline: Date;
}

const planSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).optional(),
  deadline: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
});
export const plans: IPlan[] = [];

export const app: Router = Router();

app.post("/", (req: Request, res: Response) => {
  const userId = req.headers.authorization;
  const logged = users.find((user) => user.id === userId);
  if (logged === undefined) {
    return res.status(401).send({ message: "unauthorized" });
  }

  const { title, description, deadline } = req.body;

  if (!isNotEmptyString(title)) {
    return res.status(400).json({ message: "Please enter a title" });
  }

  if (deadline === undefined) {
    return res.status(400).json({ message: "Please enter a deadline" });
  }

  const deadlineTime = new Date(deadline);

  if (isNaN(deadlineTime.getTime())) {
    return res
      .status(400)
      .json({ message: "Please enter a valid deadline in ISO" });
  }

  const parseResult = planSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: parseResult.error.message });
  }
  const plan: IPlan = {
    id: plans.length + 1,
    title,
    description,
    deadline: deadlineTime,
  };
  plans.push(plan);
  return res.status(200).send(plan);
});

app.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ message: "Please enter a valid id" });
    return;
  }
  const plan = plans.find((plan) => plan.id === id);
  if (!plan) {
    res.status(404).json({ message: "Plan not found" });
    return;
  }
  res.status(200).send(plan);
});
