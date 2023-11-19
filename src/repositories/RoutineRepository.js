import Routines from "../models/Routines.js";

class RoutinesRepository{
    constructor() {
    }
    async create(data){
        return await Routines.create(data);
    }
    async getAll(){
        return await Routines.find();
    }
    async getById(data){
        return await Routines.findById(data);
    }
    async getRecommended(){
        return await Routines.find({isRecommended: true});
    }
    async search(name){
        return await Routines.find({name: {$regex: name, $options: 'i'}});
    }
    async patch(data){
        return await Routines.findByIdAndUpdate(data._id, data, {new: true});
    }

}

export default RoutinesRepository;