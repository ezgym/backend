import Activity from "../models/Activity.js";

class ActivityRepository{
    constructor(){

    }
    async create(data){
        await Activity.create(data);
    }
    async getAll(){
        return await Activity.find();
    }
    async getByServiceId(id){
        return await Activity.find({service_id: id});
    }
}

export default ActivityRepository;