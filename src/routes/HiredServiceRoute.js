import {Router} from "express";
import HiredServiceController from "../controllers/HiredServiceController.js";

const router = Router();
const hiredServiceController = new HiredServiceController();

router.get("/", async (req, res) => {
    await hiredServiceController.getAllHiredServices(req, res);
});

router.post("/", async(req, res) => {
    await hiredServiceController.createHiredService(req, res);
})

export default router;