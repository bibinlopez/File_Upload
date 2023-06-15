const Product = require('../models/product')

const path = require('path')

const Local = async (req, res) => {
   console.log(req.files);

   const productImage = req.files.image
   // const imageName = Date.now()
   const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`) 
   await productImage.mv(imagePath)

   const product =await Product.findOne({_id: req.params.id})
   const url = `/uploads/${productImage.name}`

   product.image = url
   const result = await product.save()

   return res.status(200).json({msg: 'Success', data: result})
}


module.exports = {
   Local
}