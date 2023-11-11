import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    description:{
        type: String,
        required: [true, "The description is obligatory"]
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        required: [true, "The service id is obligatory"]
    }

});

export default mongoose.model("activities", activitySchema);