import {Router} from 'express';
import RoutineController from '../controllers/RoutineController.js';

const router = Router();
const controller = new RoutineController();

router.post('/', async(req,res)=>{
    await controller.create(req,res);
})
router.get('/', async(req,res)=>{
    await controller.getAll(req,res);
})
router.get('/id/:id', async(req,res)=>{
    await controller.getById(req,res);
})
router.get("/recommended", async(req,res)=>{
    //console.log("recommended");
    await controller.getRecommended(req,res);
})
router.get("/search/:name",async(req,res)=>{
    await controller.search(req,res);
})
router.patch('/', async (req, res)=>{
    await controller.patch(req,res);
})

export default router;