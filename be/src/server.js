const express = require("express")
const app = express()
const routes = require('./router/router')
const helmet = require("helmet");
const configs = require('./configs/config')
const db = require('./db/db')
const cors=require('cors')

configs.serverConfig.installServerConfigs()

app.use(helmet({}))
app.use(cors({}))
app.use(express.json())


app.use(`${process.env.APP_PREFIX}inventory`, routes.inventory)
app.use(`${process.env.APP_PREFIX}inventory-types`, routes.inventorytypes)


app.listen(process.env.APP_PORT || 5020, () => {
    db.mongooseConnection.connectMongoose(process.env.MONGO_DB_HOST || "mongodb+srv://yasindlklc:1JlzZM2HB01YzIyT@cluster0.wknqv.mongodb.net/?retryWrites=true&w=majority")
    console.log("Server Running" + " " + process.env.APP_PORT || 5020)
})

module.exports=app