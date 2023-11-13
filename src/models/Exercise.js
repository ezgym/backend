import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    image: {
        type: String,
        required: [true, "The image is obligatory"]
    },
    reps: {
        type: Number,
        required: [true, "The reps number is obligatory"]
    },
    video: {
        type: String,
        required: [true, "The video is obligatory"]
    },
    description: {
        type: String,
        required: [true, "The description is obligatory"]
    },
    routine_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "routines",
        required: [true, "The routine is obligatory"]
    }
});

export default mongoose.model("exercises", exerciseSchema);