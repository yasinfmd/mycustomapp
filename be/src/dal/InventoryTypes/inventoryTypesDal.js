const InventoryTypes = require('../../models/InventoryTypes/InventoryTypes')

const inventoryTypesDataAccess = {
    async create(inventoryTypesModel) {
        return await inventoryTypesModel.save()
    },
    async getAll() {
        return await InventoryTypes.find()
    },
    async findById(id){
        return await InventoryTypes.findById(id)
    }
}

module.exports = inventoryTypesDataAccess