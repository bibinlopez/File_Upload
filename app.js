

const express = require ('express')

// const app = express()









const port = 3000;

const start = async () => {
   try {
      express().listen(port, console.log(`Server listening on port ${port}...`))
   } catch (error) {
      console.log(error);
   }
}


start()