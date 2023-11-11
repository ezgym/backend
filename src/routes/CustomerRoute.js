import {Router} from "express";
import CustomerController from "../controllers/CustomerController.js";

const router = Router();
const customerController = new CustomerController();

router.get("/", async (req, res) => {
    await customerController.getAllCustomers(req, res);
});

router.get("/:id", async (req, res) => {
    await customerController.getCustomerById(req, res);
})

router.get("/:id/hiredservices", async (req, res) => {
    await customerController.getHiredServicesByCustomerId(req, res);
})

export default router;