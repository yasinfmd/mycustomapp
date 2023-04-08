const inventoryTypesService = require('../../service/InventoryTypes/inventoryTypesService')
const { StatusCodes } = require('http-status-codes')
exports.getAll = async (req, res) => {
    try {
        const result = await inventoryTypesService.getAll()
        res.status(result.status).json(result.json)
    } catch (error) {
        res.json({ error: error.message, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



