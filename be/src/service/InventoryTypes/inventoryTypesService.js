const inventoryTypesDal = require('../../dal/InventoryTypes/inventoryTypesDal')
const { StatusCodes } = require('http-status-codes')

const inventoryTypesService = {
    async getAll() {
        const result=await inventoryTypesDal.getAll()
        return {status:StatusCodes.OK,json:result}

    },
    async findById(id){
        const result=await inventoryTypesDal.findById(id)
        return {status:StatusCodes.OK,json:result}
    }
}


module.exports = inventoryTypesService