import Exercise from '../models/Exercise.js';

class ExerciseRepository{
    constructor(){
    }
    async getExercises(){
        return await Exercise.find();
    }
    async addExercise(exercise){
        return await Exercise.create(exercise);
    }
    async deleteExercise(id){
        return await Exercise.findByIdAndDelete(id);
    }
    async getById(id){
        return await Exercise.findById(id);
    }
    async getByRoutineId(id){
        return await Exercise.find({routine_id: id});
    }

}
export default ExerciseRepository;