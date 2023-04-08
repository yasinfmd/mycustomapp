const { check } = require('express-validator')

const InventoryValidations = {
    create() {
        return [
            check("name").isString(),
            check("name").notEmpty(),
            check("name").isLength({ min: 1 }),
            check("number").notEmpty(),
            check("number").isInt({min:0}),
            check("inventoryType").isMongoId(),
        ]
    }
}

module.exports = InventoryValidations