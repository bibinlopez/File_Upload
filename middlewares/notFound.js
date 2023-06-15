

const notFound = (req,res)=>{
   return res.status(404).send('Round does not exist')
}



module.exports = notFound