import {Router} from 'express';
import ExerciseController from '../controllers/ExerciseController.js';

const router = Router();
const exerciseController = new ExerciseController();

router.post('/', async (req,res)=>{
    await exerciseController.create(req,res);
});

router.get('/', async (req,res)=>{
    await exerciseController.getAll(req,res);
})
router.get('/id/:id', async (req,res)=>{
    await exerciseController.getById(req,res);
})
router.get('/routine/:id',async(req,res)=>{
    await exerciseController.getByRoutineId(req,res);
})
router.delete('/:id', async (req,res)=>{
    await exerciseController.deleteById(req,res);
})

export default router;