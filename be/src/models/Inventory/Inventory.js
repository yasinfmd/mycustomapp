const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    number: {
        type: Schema.Types.Number,
        required: true,
    },
    inventoryType: { type: mongoose.Schema.Types.ObjectId, ref: 'InventoryTypes', required: true }
}, { timestamps: true, versionKey: false })

const Inventory = mongoose.model("Inventory", inventorySchema, "inventory")
module.exports = Inventory