import Review from "../models/Review.js";

class ReviewRepository{
    constructor() {
    }
    async getAll(){
        return await Review.find();
    }
    async create(data){
        await Review.create(data);
    }
    async getByAgencyId(id){
        return await Review.find({agency_id:id});
    }
}

export default ReviewRepository;