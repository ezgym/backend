import AgencyRepository from "../repositories/AgencyRepository.js";
import bcrypt from "bcrypt";
import generateJWT from "../helpers/GenerateJWT.js";

class AuthAgencyController{
    constructor(){
        this.agencyRepository = new AgencyRepository();
    }
    async registerAgency(req, res){
        try{
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const agency = await this.agencyRepository.create(req.body);
            return res.status(200).json({
                message: "Done!"
            })
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
    async loginAgency(req, res){
        // Get data
        const {email, password} = req.body;
        // Check the email
        try{
            const user = await this.agencyRepository.findByEmail(email);
            if(!user){
                return res.status(401).json({
                    message: "There isn't an account with that email"
                })
            }
            // Check the password
            const resultPassword = await bcrypt.compareSync(password, user.password);
            if(!resultPassword){
                return res.status(401).json({
                    message: "The password is incorrect"
                })
            }
            // Create JWT and return it
            const jwt = await generateJWT(user._id);
            console.log(user);

            return res.status(200).json({
                message: "Welcome!",
                token: jwt,
                id: user._id,
                user
            })
        }
        catch(error){
            return res.status(400).json({
                message: error
            })
        }
    }
}

export default AuthAgencyController;