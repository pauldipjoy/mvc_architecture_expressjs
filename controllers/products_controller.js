const path = require('path');
const products = require("../models/products_model")

exports.getProducts = (req, res) => {

    res.sendfile(path.join(__dirname + '/../views/products.html'))
    
  }


exports.saveProducts =(req, res) => {
    const name = req.body.name;
    const category = req.body.category;
  
    const product = {
      name,
      category,
    };
  
    products.push(product);
    res.status(202).json({
      success: true,
      products,
    });
  }  