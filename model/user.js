const mongoose = require('mongoose')
const UserModel = mongoose.Schema({
    username:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:false
    },
	password:{
		type:String,
		required:false
	}})
const user=mongoose.model('user',UserModel);
module.exports = user