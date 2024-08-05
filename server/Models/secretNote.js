import mongoose from "mongoose";


const noteSchema = mongoose.Schema({
    userId: String,
    note: String,
    color: String
});

const noteModel = mongoose.model("Notes", noteSchema);

export default noteModel;