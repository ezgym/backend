import ExerciseRepository from '../repositories/ExerciseRepository.js';

class ExerciseController{
    constructor(){
        this.exerciseRepository = new ExerciseRepository();
    }
    async create(req, res){
        try{
            await this.exerciseRepository.addExercise(req.body);
            return res.status(201).json("created");
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async getAll(req, res){
        try{
            const exercises = await this.exerciseRepository.getExercises();
            return res.status(200).json(exercises);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async getById(req, res){
        try{
            const exercise = await this.exerciseRepository.getById(req.params.id);
            return res.status(200).json(exercise);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }
    async getByRoutineId(req, res){
        try{
            const exercises = await this.exerciseRepository.getByRoutineId(req.params.id);
            return res.status(200).json(exercises);
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    
    }
    async deleteById(req, res){
        try{
            await this.exerciseRepository.deleteExercise(req.params.id);
            return res.status(200).json("done");
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    }


}export default ExerciseController;