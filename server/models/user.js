import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2},
    lastName: {type: String, required: true, minlength: 2},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, },
    password: {type: String, required: true},
    links: [{
        title: {type: String, required: true},
        url: {type: String, required: true},
        description: {type: String, required: true},
    }]
}) 



const User = mongoose.model("users", userSchema);
export default User;