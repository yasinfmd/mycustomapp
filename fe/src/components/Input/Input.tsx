import {HTMLInputTypeAttribute} from "react";
import './Input.css'
import {BaseProps} from "../../interfaces/BaseProps";

interface PropTypes extends  BaseProps{
    type?:HTMLInputTypeAttribute
    value:string
    onChange:(value:string)=>void
    minLength?:number
    max?:number
    min?:number
}
const Input=(props:PropTypes)=>{
    const {type='text',label,value,onChange,min=1,max,minLength=1,placeHolder}=props

    return(
        <div className="input-wrapper">
            <div className="input-label">{label}</div>
            <input className="input"
                   min={min}
                   placeholder={placeHolder}
                   max={max}
                   minLength={minLength}
                   type={type} value={value} onChange={(e)=>onChange(e.target.value)}/>
        </div>
    )
}

export  default  Input