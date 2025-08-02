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
 *    ## express Router(), with app.use('path','file path')
 *    ## extention Thunder client
 *    ## middlewares are used widely for authentication ( people accessing routes ), error handling and ... const middleware = (req,res,next) => {  after done in stack go to. next()}
 *    ## pnpm add morgan --save ( log request useful middleware ). app.use(morgan('level of logging' -> 'dev' , ...)) app.use will be applied on all api go through middleware first
 * 
 */

import { config } from "dotenv";
config();

import express, { Request, Response, Router } from "express";
import router from "./router/router";

const app = express();

app.use("/api", router);

app.get(
  "/",
  (req: Request, res: Response) => {
    res.status(200).json({ message: "hey" });
  },
  []
);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.LISTEN_PORT}`
  );
});
