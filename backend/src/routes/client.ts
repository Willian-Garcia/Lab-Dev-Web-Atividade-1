import { Router } from "express";
import ClientController from "../controllers/ClientController";

const router = Router();

router.get("/", ClientController.getClients);
router.post("/", ClientController.createClients);
router.put("/:id", ClientController.updateClients);
router.delete("/:id", ClientController.deleteClients);

export default router;