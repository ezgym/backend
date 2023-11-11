import ReviewRepository from "../repositories/ReviewRepository.js";

class ReviewController{
    constructor() {
        this.reviewRepository = new ReviewRepository();
    }
    async getAllReviews(req, res){
        try{
            const reviews = await this.reviewRepository.getAll();
            return res.status(200).json(reviews);
        }
        catch(error){
            return res.status(400).json(error);
        }
    }
    async createReview(req, res){
        try{
            await this.reviewRepository.create(req.body);
            return res.status(200).json("Done!");
        }
        catch(error){
            return res.status(400).json(error);
        }
    }
}

export default ReviewController;