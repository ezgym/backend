import mongoose from "mongoose";

const hiredServiceSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: [true, "The customer id is obligatory"]
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        required: [true, "The service id is obligatory"]
    },
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agencies",
        required: [true, "The agency id is obligatory"]
    },
    status: {
        type: String,
        required: [true, "The status is obligatory"]
    }
});

export default mongoose.model("hiredservices", hiredServiceSchema);