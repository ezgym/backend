import Subscription from "../models/Subscription.js";

class SubscriptionRepository{
    constructor() {

    }
    async getAll(){
        return await Subscription.find();
    }
    async create(data){
        await Subscription.create(data);
    }
    async getById(id){
        return Subscription.findById(id);
    }
    async deleteById(id){
        await Subscription.findByIdAndDelete(id);
    }
    async getByUserId(id){
        return await Subscription.find({user_id: id});
    }
}

export default SubscriptionRepository;