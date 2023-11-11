import {Router} from "express";
import AuthAgencyController from "../controllers/AuthAgencyController.js";

const router = Router();
const authAgencyController = new AuthAgencyController();


router.post("/register", async(req, res) => {
    await authAgencyController.registerAgency(req, res);
})

router.post("/login", async (req, res) => {
    await authAgencyController.loginAgency(req, res);
})

export default router;