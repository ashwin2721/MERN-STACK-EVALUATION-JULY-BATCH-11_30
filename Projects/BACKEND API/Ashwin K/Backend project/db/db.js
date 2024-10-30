const mongoose =require('mongoose');
module.exports = mongoose.connect ('mongodb://localhost:27017')
.then((result)=> {
    console.log('successfully connected');
})
.catch((err)=>{
    console.log('error while connecting',err);
});