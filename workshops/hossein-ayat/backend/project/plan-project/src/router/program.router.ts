import { Router, Request, Response } from "express";
import { z } from "zod";
import { users } from "./users.router";
import { plans } from "./plan.router";

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

const programs: IProgram[] = [];

app.post("/", (req: Request, res: Response) => {
  const userId = req.headers.authorization;
  const logged = users.find((user) => user.id === userId);
  if (!logged) {
    return res.status(401).send({ message: "unauthorized" });
  }

  const { planId, title, description } = req.body;
  if (title === undefined || planId === undefined) {
    return res
      .status(400)
      .json({ message: "Please enter a valid title and planId" });
  }

  const parseResult = programSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: parseResult.error.message });
  }

  const planExists = plans.find((plan) => plan.id === planId);
  if (!planExists) {
    return res.status(404).json({ message: "Plan not found" });
  }

  const program: IProgram = {
    id: programs.length + 1,
    planId,
    title,
    description,
  };
  programs.push(program);
  return res.status(200).send(program);
});
