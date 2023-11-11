import SubscriptionRepository from "../repositories/SubscriptionRepository.js";

class SubscriptionController{
    constructor(){
        this.subscriptionRepository = new SubscriptionRepository();
    }
    async create(req, res){
        try{
            //console.log(req.body);
            await this.subscriptionRepository.create(req.body);
            return res.status(201).send();
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }
    }
    async getAll(req, res){
        try{
            const subscriptions = await this.subscriptionRepository.getAll();
            return res.status(200).json(subscriptions);
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }
    }
    async getById(req, res){
        try{
            console.log(req.params.id);
            const subscription = await this.subscriptionRepository.getById(req.params.id);
            return res.status(200).json(subscription);
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }
    }
    async deleteById(req, res){
        try{
            await this.subscriptionRepository.deleteById(req.params.id);
            return res.status(200).send();
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }
    
    }
    async getByUserId(req, res){
        try{
            console.log(req.params.id);
            const subscriptions = await this.subscriptionRepository.getByUserId(req.params.id);
            console.log(subscriptions);
            return res.status(200).json(subscriptions);
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }

    }

}
export default SubscriptionController;