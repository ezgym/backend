import dotenv from "dotenv";
import Server from "./app/Server.js";

dotenv.config();

const server = new Server();
server.listen();