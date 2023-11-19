import RoutinesRepository from "../repositories/RoutineRepository.js";

class RoutineController{
    constructor(){
        this.repository = new RoutinesRepository();
    }
    async create(req, res){
        try{
        await this.repository.create(req.body);
        return res.status(201).json("Done");
        }catch(err){
            return res.status(400).json({error: err.message});        
        }
    }

    async getAll(req, res){
        try{
            const routines = await this.repository.getAll();
            return res.status(200).json(routines);
        }catch(err){
            return res.status(400).json({error: err.message});
        }    
    }

    async getById(req, res){
        try{
            const routine = await this.repository.getById(req.params.id);
            return res.status(200).json(routine);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async getRecommended(req,res){
        try{
            //console.log("Recommended");
            const routines = await this.repository.getRecommended();
            return res.status(200).json(routines);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async search(req, res){
        try{
            const routines = await this.repository.search(req.params.name);
            return res.status(200).json(routines);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async patch(req , res){
        try{
            const routine = await this.repository.patch(req.body);
            return res.status(200).json(routine);
        }catch(err){
            return res.status(400).json({error: err.message});        
        }

    }


}export default RoutineController;
