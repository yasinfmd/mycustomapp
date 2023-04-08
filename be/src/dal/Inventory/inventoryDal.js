const Inventory = require('../../models/Inventory/Inventory')
const inventoryDataAccess = {
    async create(inventoryModel) {
        return await inventoryModel.save()
    },
    async getAll() {
        return await Inventory.find({}).select('_id name number').populate({
            path:'inventoryType',
            select:'name'
        })
    },
}

module.exports = inventoryDataAccess