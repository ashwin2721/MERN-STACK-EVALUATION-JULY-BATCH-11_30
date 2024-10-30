const { privateDecrypt } = require('crypto');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res){
  const products = {
    name: "laptop",
    price: 1000,
    brand: "samsung",
    color: "black"
    
  }
  res.json(products)
})

module.exports = router;
