import Service from "../models/Service.js";

class ServiceRepository{
    constructor() {

    }
    async getAll(){
        return await Service.find().populate("agency_id");
    }
    async create(data){
        await Service.create(data);
    }
    async getById(id){
        return Service.findById(id).populate("agency_id");
    }
    async deleteById(id){
        await Service.findByIdAndDelete(id);
    }
    async updateById(id, data){
        await Service.findByIdAndUpdate(id, data);
    }
    async getByAgencyId(id){
        return await Service.find({agency_id: id});
    }
    async getByName(nameSearch){
        return await Service.find({name: {$regex:nameSearch, $options: 'i'}});
    }
}

export default ServiceRepository;