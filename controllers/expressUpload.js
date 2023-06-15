const Product = require('../models/product')

const path = require('path')

const Local = async (req, res) => {
   console.log(req.files);

   const productImage = req.files.image
   // const imageName = Date.now()
   const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`) 
   await productImage.mv(imagePath)

   return res.status(200).json({msg: 'Success', image:{src: `/uploads/${productImage.name}` }})
}


module.exports = {
   Local
}