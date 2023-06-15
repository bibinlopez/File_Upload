const Product = require('../models/product')

const path = require('path')

const Local = async (req, res) => {
   console.log(req.files);

   const productImage = req.files.image
   // const imageName = Date.now()
   const ext = path.extname(productImage.name)
   const Name = 'photo'+'-'+ Date.now() +ext

   // const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`) 
   const imagePath = path.join(__dirname, '../public/uploads/' + `${Name}`) 
   await productImage.mv(imagePath)

   const product =await Product.findOne({_id: req.params.id})
   // const url = `/uploads/${productImage.name}`
   const url = `/uploads/${Name}`
   product.image = url
   const result = await product.save()

   return res.status(200).json({msg: 'Success', data: result})
}


module.exports = {
   Local
}