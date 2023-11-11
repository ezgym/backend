import {Router} from "express";
import ActivityController from "../controllers/ActivityController.js";


const router = Router();
const activityController = new ActivityController();


router.get("/", async (req, res) => {
    await activityController.getAllActivities(req, res);
})

router.post("/", async(req, res) => {
    await activityController.createActivity(req, res);
})




export default router;