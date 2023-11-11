import Routines from "../models/Routines.js";

class RoutinesRepository{
    constructor() {
    }
    async create(data){
        return await Routines.create(data);
    }
    async getAll(){
        return await Routines.find().populate('exercises');
    }
    async getById(data){
        return await Routines.findById(data).populate('exercises');
    }

}

export default RoutinesRepository;