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
        required: [true, "The lenght is obligatory"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "The type is obligatory"]
    },
    difficulty:{
        type: String,
        required: [true, "The difficulty is obligatory"],
        unique: true
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
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercises",
        required: [true, "The exercises are obligatory"]
    }
});

export default mongoose.model("routines", routineSchema);