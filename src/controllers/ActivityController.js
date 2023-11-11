import ActivityRepository from "../repositories/ActivityRepository.js";
import Activity from "../models/Activity.js";

class ActivityController{
    constructor(){
        this.activityRepository = new ActivityRepository();
    }
    async getAllActivities(req, res){
        try{
            const activities = await Activity.find();
            return res.status(200).json(activities);
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
    async createActivity(req, res){
        try{
            await this.activityRepository.create(req.body);
            return res.status(200).json({
                message: "Done!"
            })
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
}

export default ActivityController;