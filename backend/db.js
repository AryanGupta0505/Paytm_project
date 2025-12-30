const mongoose = require('mongoose');
mongoose.connect('your_database_uri')
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})
const User= mongoose.model('User',UserSchema)
const AccountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, //reference to user model 
        ref:'User' // each account is linked to a user
        //makes ur schema strict
    },
    balance:Number
})
const Account=mongoose.model('Account',AccountSchema)
module.exports={
    User,
    Account
}
