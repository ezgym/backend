import {Router} from 'express';
import SubscriptionController from '../controllers/SubscriptionController.js';

const router = Router();
const subscriptionController = new SubscriptionController();

router.post('/', async (req,res)=>{
        console.log(req.body);
        await subscriptionController.create(req,res);
});

router.get('/', async (req,res)=>{
    await subscriptionController.getAll(req,res);

});

router.get('/:id', async (req,res)=>{
    await subscriptionController.getById(req,res);
});

router.delete('/:id', async (req,res)=>{
    await subscriptionController.deleteById(req,res);
    
});

router.get('/userId/:id',async(req,res)=>{
    await subscriptionController.getByUserId(req,res);
})

export default router;