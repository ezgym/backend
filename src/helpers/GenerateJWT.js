import jwt from "jsonwebtoken";

const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = {id};
        jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1h'}, (err, token) => {
            if(err){
                reject("There is an error")
            }
            else{
                resolve(token);
            }
        })
    })

}

export default generateJWT;