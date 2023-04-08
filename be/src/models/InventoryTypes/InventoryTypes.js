const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const inventoryTypes = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    inventories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Inventory"
        }
    ]

}, { timestamps: true, versionKey: false })

const InventoryTypes = mongoose.model("InventoryTypes", inventoryTypes, "inventoryTypes")
module.exports = InventoryTypes