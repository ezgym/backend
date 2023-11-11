import {Router} from "express";
import ServiceController from "../controllers/ServiceController.js";

const router = Router();
const serviceController = new ServiceController();

router.get("/", async (req, res) => {
    await serviceController.getServices(req, res);
});

router.post("/", async (req, res) =>{
    await serviceController.createService(req, res);
});

router.get("/:id", async (req, res) => {
    await serviceController.getServiceById(req, res);
});

router.delete("/:id", async(req, res) => {
    await serviceController.deleteServiceById(req, res);
});

router.put("/:id", async (req, res) => {
    await serviceController.updateServiceById(req, res);
})

router.get("/:id/activities", async (req, res) => {
    await serviceController.getActivitiesByServiceId(req, res)
})

router.get("/name/:name", async (req, res) => {
    await serviceController.getServicesByName(req, res);
})


export default router;