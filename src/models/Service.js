import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    price: {
        type: Number,
        required: [true, "The price is obligatory"]
    },
    location:{
        type: String,
        required: [true, "The location is obligatory"]
    },
    img_url:{
        type: String,
        required: [true, "The image is obligatory"]
    },
    description: {
        type: String,
        required: [true, "The description is obligatory"]
    },
    isOffer: {
        type: Boolean,
        default: false
    },
    priceOffer: {
        type: Number,
        default: 0
    },
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agencies",
        required: [true, "The service id is obligatory"]
    },
    score: {
        type: Number,
        default: 0
    }
});


export default mongoose.model("services", serviceSchema);