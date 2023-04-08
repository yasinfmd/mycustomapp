const inventoryDal = require('../../dal/Inventory/inventoryDal')
const Inventory=require('../../models/Inventory/Inventory')
const {  validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes')
const inventoryTypesDal=require('../../dal/InventoryTypes/inventoryTypesDal')

const inventoryService = {
    async create(req) {
        const {name,inventoryType,number}=req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return {status:StatusCodes.UNPROCESSABLE_ENTITY,json:{ errors: errors.array() }}
        }
        const inventory=new Inventory(
            {
                name,
                inventoryType,
                number
            }
        )
        await inventoryDal.create(inventory)
        const inventoryTypeItem=await inventoryTypesDal.findById(inventoryType)
        inventoryTypeItem.inventories.push(inventory)
        await inventoryTypesDal.create(inventoryTypeItem)
        return {status:StatusCodes.CREATED,json:inventory}
    },
    async getAll() {
        const response = await inventoryDal.getAll()
        const mappedData=response.map((item)=>{
            return {
                _id:item._id,
                name:item.name,
                number:item.number,
                inventoryType:item.inventoryType.name
            }
        });
        return {status:StatusCodes.OK,json:mappedData};
    },
}


module.exports = inventoryService