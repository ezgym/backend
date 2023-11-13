import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is obligatory"]
    },
    description: {
        type: String,
        required: [true, "The description is obligatory"]
    },
    lenght: {
        type: Number,
        required: [true, "The lenght is obligatory"]
    },
    type: {
        type: String,
        required: [true, "The type is obligatory"]
    },
    difficulty:{
        type: String,
        required: [true, "The difficulty is obligatory"],
    },
    equipment:{
        type: Boolean,
        required: [true, "The equipment is obligatory"]
    },
    score:{
        type: Number,
        required: [true, "The score is obligatory"]
    },
    image:{
        type: String,
        required: [true, "The image is obligatory"]
    },
    isRecommended: {
        type: Boolean
    }
});

export default mongoose.model("routines", routineSchema);