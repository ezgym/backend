import {Router} from "express";
import AuthCustomerController from "../controllers/AuthCustomerController.js";

const authCustomerController = new AuthCustomerController();

const router = Router();

router.post("/register", async (req, res) => {
    await authCustomerController.registerCustomer(req, res);
})

router.post("/login", async (req, res) => {
    await authCustomerController.loginCustomer(req, res);
});

router.get("/logout", () => {

})

export default router;