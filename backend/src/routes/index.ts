import { Router } from "express";
import client from "./client";

const router = Router();

router.use("/cliente", client);

export default router;