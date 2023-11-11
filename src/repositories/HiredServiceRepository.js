import HiredService from "../models/HiredService.js";

class HiredServiceRepository{
    constructor() {

    }
    async getAll(){
        return await HiredService.find();
    }
    async getByCustomerId(id){
        return await HiredService.find({customer_id: id}).populate('service_id')
    }
    async getByAgencyId(id){
        return await HiredService.find({agency_id: id}).populate('service_id').populate('customer_id')
    }
    async create(data){
        await HiredService.create(data);
    }

};

export default HiredServiceRepository;