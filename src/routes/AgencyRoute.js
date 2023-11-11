import {Router} from "express";
import AgencyController from "../controllers/AgencyController.js";

const router = Router();
const agencyController = new AgencyController();

router.get("/", async (req, res) => {
    await agencyController.getAllAgencies(req, res);
});

router.get("/:id", async (req, res) => {
    await agencyController.getAgencyById(req, res);
})

router.get("/:id/services", async (req, res) => {
    await agencyController.getServicesByAgencyId(req, res);
});

router.get("/:id/reviews", async(req, res) => {
    await agencyController.getReviewsByAgencyId(req, res);
});

router.get("/:id/hiredservices", async (req, res) => {
    await agencyController.getHiredServicesByAgencyId(req, res);
})


export default router;