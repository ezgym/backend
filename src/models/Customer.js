import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    lastName: {
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
    phoneNumber:{
        type: String,
        required: [true, "The phone number is obligatory"],
        unique: true
    },
    img_url:{
        type: String,
        required: [true, "The image is obligatory"]
    },
    type_user: {
        type: String,
        default: "customer"
    }
});

export default mongoose.model("customers", customerSchema);
