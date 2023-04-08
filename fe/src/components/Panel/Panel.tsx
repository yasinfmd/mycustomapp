import './Panel.css'
import {ReactNode} from "react";


interface PropTypes{
    children:ReactNode |ReactNode[]
    title:string
}
const Panel=(props:PropTypes)=>{
    const {children,title}=props
    return (
        <div className="panel-wrapper">
            <h2 className="panel-title">{title}</h2>
            <div className="px-4 py-8">
                {children}
            </div>
        </div>
    )
}
export default  Panel