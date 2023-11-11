import Customer from "../models/Customer.js";

class CustomerRepository{
    constructor(){

    }
    async create(data){
        return await Customer.create(data);
    }
    async findByEmail(data){
        return await Customer.findOne({email: data});
    }
    async getAll(data){
        return await Customer.find();
    }
    async getById(id){
        return await Customer.findById(id);
    }
};

export default CustomerRepository;