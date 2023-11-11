import mongoose from "mongoose";

const connectDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    }
    catch(error){
        console.log("There is an error in the database")
        console.log(error)
    }
}

export default connectDatabase;