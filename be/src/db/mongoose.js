const mongoose = require('mongoose')
const connectToMongoDb=async (url)=>{
    try {
       let connection= await mongoose.connect(url, {
            autoIndex: true,
            compressors: "zlib",
            connectTimeoutMS:1000*20
        }) 
        return connection
       
    } catch (error) {
        throw new Error("Cannot Connect to DB !")
    
    }
}
exports.connectMongoose = async (url) =>connectToMongoDb(url)
