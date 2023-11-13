import {Router} from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();
const userController = new UserController();

router.post('/register', async (req, res) => {
    await userController.registerUser(req,res)
} );

router.post('/login', async (req, res) => {
    await userController.loginUser(req,res)
})

router.get('/:id', async (req,res)=>{
    await userController.getById(req,res);
})

export default router;