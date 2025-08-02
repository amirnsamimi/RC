import { Router } from "express";

const router: Router = Router();

router.get("/product", () => {});

// dynamic parameter route ( :id )
router.get("/product/:id", () => {});

export default router;
