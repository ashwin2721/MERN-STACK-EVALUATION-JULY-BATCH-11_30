var express = require('express');
var router = express.Router();
const User=require('../models/user-model.js')
const {getAllUser}=require('../controllers/users.controller.js')
const {addUsers}=require('../controllers/users.controller.js')
const {getAllUpdate}=require('../controllers/users.controller.js')
const {userdelete}=require('../controllers/users.controller.js')

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('successfully logged');

});
router.get('/list', function(req, res, next) { //get --retrieve data from user
                                                //post --send data to server create new entities
                                                //put -- update dat on the srver
                                                //delete-- delete data on the server

  const products = {
    name: "ashwin",
    email: "ashwin@gmail.com",
    ph: 123,
    
    
  }
  
  res.json(products)
  var data=new User(products)
  data.save()

});
router.get('/allusers',getAllUser);
router.post('/addusers',addUsers);
router.put('/updateusers/:id',getAllUpdate);
router.delete('/deleteusers/:id',userdelete);

module.exports = router;
