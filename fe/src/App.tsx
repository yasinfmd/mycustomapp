import './App.css'
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import SelectInput from "./components/SelectInput/Selectınput";
import Panel from "./components/Panel/Panel";
import Table from "./components/Table/Table";
import {useEffect, useState} from "react";
import {Request} from "./utils/Request";
import {Inventory} from "./interfaces/Inventory";
import {headers} from "./consts/tableHeader";

function App() {
    const [inventoryList, setInventoryList] = useState<Array<Inventory>>([])
    const getInventories = async () => {
        try {
            const response = await Request.get('inventory')
            setInventoryList(response)
        } catch (e) {
            console.log("An error occurred")
        }

    }
    useEffect(() => {
        getInventories()
    }, [])

    return (
        <div className="my-app">
            <Panel title="Yeni Envanter">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
                    <Input label={"Envanter Adı"} type="text" value={"q"} onChange={() => {
                    }}/>

                    <SelectInput label="Envanter Tipi" data={[]}/>

                    <Input label={"Adet"} type="number" value={"q"} onChange={() => {}}/>

                    <div className="flex items-end sm:w-full">
                        <Button onClick={() => {
                        }} text={"Kaydet"}/>
                    </div>
                </div>
            </Panel>


            <div className="my-4">

                <Table
                    title="Envanter"
                    data={inventoryList}
                    headers={headers}/>
            </div>


        </div>
    )
}

export default App
