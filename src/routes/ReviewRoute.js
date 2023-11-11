import {Router} from "express";
import ReviewController from "../controllers/ReviewController.js";

const router = Router();
const reviewController = new ReviewController();


router.get("/", async (req, res) => {
    await reviewController.getAllReviews(req, res);
});

router.post("/", async (req, res) => {
    await reviewController.createReview(req, res);
})

export default router;