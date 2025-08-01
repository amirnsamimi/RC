/**
 *    ## pnpm add -D typescript ts-node prisma @types/node dotenv express
 *    ## npx tsc --init
 *    ## npx prisma --init
 *    ## render.com -> create postgresql db or use postgres locally
 *    ## prisma by prisma extention is usefull
 *
 */

import { config } from "dotenv";
config();

import express, { Request, Response } from "express";

const app = express();

app.get(
  "/",
  (req: Request, res: Response) => {
    res.status(200).json({ message: "hey" });
  },
  []
);

app.listen(process.env.LISTEN_PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.LISTEN_PORT}`
  );
});
