import Agency from "../models/Agency.js";

class AgencyRepository{
    constructor() {
    }
    async create(data){
        return await Agency.create(data);
    }
    async findByEmail(data){
        return await Agency.findOne({email: data});
    }
    async getAll(){
        return await Agency.find();
    }
    async getById(data){
        return await Agency.findById(data);
    }

}

export default AgencyRepository;