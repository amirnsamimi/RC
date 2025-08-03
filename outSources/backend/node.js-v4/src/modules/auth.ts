import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const jwtS = process.env.JWT_SECRET;
if (!jwtS) {
  throw new Error("missing secrets");
}

export const createJWT = (user: { id: string; username: string }) => {
  const token = jwt.sign({ id: user.id, username: user.username }, jwtS);
  return token;
};

export const protect = (req: Request,res: Response,next: NextFunction) => {
    const bearar = req.headers.authorization
    if(!bearar){
        res.status(401).send("not authorized")
    }

    res.status(200).send("authorized")
}