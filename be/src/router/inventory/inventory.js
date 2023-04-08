const express = require("express")
const router = express.Router()
const inventoryController = require('../../controllers/inventory/inventoryController')
const validations=require('../../validations/validations')
router.get("/",  inventoryController.getAll)
router.post("/", [...validations.inventoryValidator.create()], inventoryController.create)

module.exports = {
    inventory: router
}

