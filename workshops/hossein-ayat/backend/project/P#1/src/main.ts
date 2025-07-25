import express from "express";
import { IUsersBase } from "./definitions";

const app = express();
app.use(express.json());



// GET /api/users, /api/users?phoneNumber=<phoneNumber>,
app.get("/api/users", (req, res) => {});

//POST /api/users body: { firstName:string, lastName:string, phoneNumber: string, positionId: string}

app.post("/api/users", (req, res) => {
//   const { firstName, lastName, phoneNumber, positionId }: IUsersBase =
//     req.query;
});
//GET /api/positions
app.get("/api/positions", (req, res) => {});
//POST /api/positions { title: string, roleIds: string[], description: string}

//GET /api/roles
app.get("/api/roles", (req, res) => {});
//POST /api/roles { title: string, description: string, permissionIds: string[]}

//GET /api/persmissions ( will be setup on valid APIs )
app.get("/api/persmissions", (req, res) => {});
//GET /api/programs
app.get("/api/programs", (req, res) => {});
//POST /api/programs {title:string, description:string}

//GET /api/plans, /api/plans?id=<planNumber>, /api/plan?title=<planTitle> ( throttling )
app.get("/api/plans", (req, res) => {});
//POST /api/plans, { title:string, description:string, programId:string }

//POST /api/vote { programId:string, vote: number }

app.listen("5000", () => {
  console.log("Server Initialized");
});
