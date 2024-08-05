import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    firstname:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        required: true
    },
    color: String
})

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;