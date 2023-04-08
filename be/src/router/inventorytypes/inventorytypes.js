const express = require("express")
const router = express.Router()
const inventoryTypesController = require('../../controllers/inventorytypes/inventoryTypesController')
router.get("/",  inventoryTypesController.getAll)
router.post("/",  (req,res,next)=>{
    res.json({"id":10000});
})

module.exports = {
    inventorytypes: router
}
