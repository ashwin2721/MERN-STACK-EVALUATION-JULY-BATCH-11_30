const mongoose=require('mongoose')
const User= mongoose.model('User',{
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    ph: {
        type:Number,
        required:true,
    },
})
module.exports= User