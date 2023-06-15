const Product = require('../models/product')

const createProduct = async (req, res) => {
   console.log(req.body);
   const product = new Product(req.body)


   const result = await product.save()

   return res.status(201).json({ result })

}

const getAllProduct = async (req, res) => {
   const result = await Product.find({})
   return res.status(200).json({ result })
}


module.exports = {
   createProduct,
   getAllProduct
}