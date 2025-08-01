/**
 *    ## pnpm add -D typescript ts-node prisma @types/node dotenv express
 *    ## npx tsc --init
 *    ## npx prisma --init
 *    ## render.com -> create postgresql db or use postgres locally
 *    ## prisma by prisma extention is usefull
 *    ## npx prisma format  -> will add all missing relations
 *    ## pnpm add @prisma/client --save  -> this is the SDK, How we talk to db, Migration will create this SDK and if schema is different migration creates new SDK.
 *    ## npx prisma migrate dev --name init, ( name: migrations saved somewhere so we can rerun later ( here named init ) )
 *    ## npx prisma migrate reset ( will reset whole db , if exist )
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
