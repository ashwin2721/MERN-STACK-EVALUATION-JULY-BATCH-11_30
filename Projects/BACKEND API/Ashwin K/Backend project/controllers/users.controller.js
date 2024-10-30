const User=require('../models/user-model')

const getAllUser=async(req,res)=>{
    const users=await User.find(req.body)
    res.json(users)
  }
const addUsers = async(req,res)=>{
    const users=await User.create(req.body);
    res.json(users)
}


const getAllUpdate=async(req,res)=>{
    const {id}=req.params;
    const Updatedusers=await User.findByIdAndUpdate(id,req.body);
    res.json(Updatedusers)
  }

const userdelete = async(req,res)=>{
    const {id}=req.params;
    await User.findByIdAndDelete(id);
    res.json({message:'Deleted successfully'})
  }  

  

 


  module.exports={getAllUser,addUsers,getAllUpdate,userdelete}