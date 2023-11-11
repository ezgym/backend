import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "The type is obligatory"]
    },
    start:{
        type: String,
        required: [true, "The start date is obligatory"]
    },
    end:{
        type: String,
        required: [true, "The end date is obligatory"]
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "The user is obligatory"]
    }

});

export default mongoose.model("subscriptions", subscriptionSchema);