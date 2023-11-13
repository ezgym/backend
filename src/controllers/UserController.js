import bcrypt from "bcrypt";
import generateJWT from "../helpers/GenerateJWT.js";
import UserRepository from "../repositories/UserRepository.js";

class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    }
    async registerUser(req, res){
        try{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await this.userRepository.create(req.body);
        return res.status(201).json({
            message: "User created successfully"
        });
        }catch(error){
            return res.status(500).json({
                message: error.message
            });
        }        
    }
    async loginUser(req, res){
        const {email, password} = req.body;
        try{
            const user = await this.userRepository.findByEmail(email);
            if(!user){
                return res.status(401).json({
                    message: "There isn't an account with that email"
                })            
            }
            else{
                const resultPassword = await bcrypt.compareSync(password, user.password);
                if(!resultPassword){
                    return res.status(401).json({
                        message: "The password is incorrect"
                    })
                }
                // Create JWT and return it
                const jwt = await generateJWT(user._id);

                return res.status(200).json({
                    message: "Welcome!",
                    token: jwt,
                    id: user._id,
                    user
                })
            }
        }catch(error){
            return res.status(500).json({
                message: error.message
            })
        }
    }

    async getById(req, res){
        try{
            const user = await this.userRepository.getById(req.params.id);
            return res.status(200).json(user);
        }catch(error){
            return res.status(400).json({
                message: error.message
            });
        }
    }

} export default UserController