import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    surname: {
        type: String,
        required: [true, "The last name is obligatory"]
    },
    email: {
        type: String,
        required: [true, "The email is obligatory"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "The password is obligatory"]
    },
    phone:{
        type: String,
        required: [true, "The phone number is obligatory"],
    },
    photo:{
        type: String,
        required: [true, "The image is obligatory"]
    },
});

export default mongoose.model("users", userSchema);