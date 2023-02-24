import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    mobileNumber: { type: Number, required: true, unique: true,  match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/ },
    Name: { type: String, required: true },
    userId: { type: String, min: 7, max: 12, required: true, unique:true},
    password: { type: String, required: true, unique: true },
    email: { type: String, unique: true }
});

const UserModel = mongoose.model('data', UserSchema, 'AddUser')
export default UserModel