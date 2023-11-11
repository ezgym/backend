import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agencies",
        required: [true, "The agency id is obligatory"]
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: [true, "The customer id is obligatory"]
    },
    comment: {
        type: String,
        required: [true, "The comment is obligatory"]
    }
});

export default mongoose.model("reviews", reviewSchema);