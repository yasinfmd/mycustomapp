const inventoryService = require('../../service/Inventory/inventoryService')
const { StatusCodes } = require('http-status-codes')
exports.getAll = async (req, res) => {
    try {
        const result = await inventoryService.getAll()
        res.status(result.status).json(result.json)
    } catch (error) {
        res.json({ error: error.message, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


exports.create = async (req, res) => {
    try {
        const result =await inventoryService.create(req)
        res.status(result.status).json(result.json)
    } catch (error) {
        res.json({ error: error.message, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



