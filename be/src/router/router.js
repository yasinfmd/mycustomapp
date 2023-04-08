const inventoryRouter=require("./inventory/inventory").inventory
const inventoryTypesRouter=require("./inventorytypes/inventorytypes").inventorytypes


module.exports={
    inventorytypes:inventoryTypesRouter,
    inventory:inventoryRouter
}
