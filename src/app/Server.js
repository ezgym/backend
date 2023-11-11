import express from "express";
import connectDatabase from "../config/Database.js";
import routerApi from "../routes/IndexRoute.js";

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.middlewares();

        this.database();

        this.routes();
    }
    middlewares(){
        this.app.use(express.json());

    }
    routes(){
        routerApi(this.app);
    }
    async database(){
        await connectDatabase();
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Running on the port ${this.port}`);
        })
    }
};

export default Server;