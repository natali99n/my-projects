import mongoose from "mongoose";

var UserSchema  = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true},

});

const Users = mongoose.model('Users', UserSchema);
export default Users;
