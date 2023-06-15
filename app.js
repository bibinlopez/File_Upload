require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const fileUpload = require('express-fileupload')

const notFound = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const expressRoute = require('./routes/expressRoute')
const productRoute = require('./routes/productRoute')



app.use(express.json())
app.use(express.static('./public'))
app.use(fileUpload())







// app.get('/', (req, res) => {
//    res.send('hi hello')
// })
app.use('/api/express', expressRoute)
app.use('/api/product', productRoute)


app.use(notFound)
app.use(errorHandlerMiddleware)


const port = 3000;

const start = async () => {
   try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server listening on port ${port}...`))
   } catch (error) {
      console.log(error);
   }
}


start()