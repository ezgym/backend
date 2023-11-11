import User from "../models/User.js";

class UserRepository{
    constructor() {
    }
    async create(data){
        return await User.create(data);
    }
    async findByEmail(data){
        return await User.findOne({email: data});
    }
    async getAll(){
        return await User.find();
    }
    async getById(data){
        return await User.findById(data).populate('subscription');
    }

}

export default UserRepository;