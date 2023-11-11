import mongoose from "mongoose";

const agencySchema = new mongoose.Schema({
    name: {
       type: String,
       unique: true,
       required: [true, "The name is obligatory"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "The email is obligatory"]
    },
    description: {
        type: String,
        required: [true, "The description is obligatory"]
    },
    location: {
        type: String,
        required: [true, "The location is obligatory"]
    },
    password: {
        type: String,
        required: [true, "The password is obligatory"]
    },
    ruc: {
        type: String,
        required: [true, "The RUC is obligatory"]
    },
    phoneNumber: {
        type: String,
        required: [true, "The phone number is obligatory"]
    },
    img_url:{
        type: String,
        required: [true, "The image is obligatory"]
    },
    type_user: {
        type: String,
        default: "agency"
    },
    score: {
        type: Number,
        default: 0
    }
});

agencySchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();
    return user;
}

export default mongoose.model("agencies", agencySchema);