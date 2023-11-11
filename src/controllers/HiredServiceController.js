import HiredServiceRepository from "../repositories/HiredServiceRepository.js";

class HiredServiceController{
    constructor() {
        this.hiredServiceRepository = new HiredServiceRepository();
    }
    async getAllHiredServices(req, res){
        try{
            const hiredServices = await this.hiredServiceRepository.getAll();
            return res.status(200).json(hiredServices);
        }
        catch(error){
            return res.status(400).json(error);
        }
    }
    async createHiredService(req, res){
        try{
            await this.hiredServiceRepository.create(req.body);
            return res.status(200).json("Done!");
        }
        catch(error){
            return res.status(400).json(error);
        }
    }
};

export default HiredServiceController;