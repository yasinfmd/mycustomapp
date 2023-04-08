
import './Button.css'
interface PropTypes{
    onClick:()=>void
    text:string
}
const Button=(props:PropTypes)=>{
    const {onClick,text}=props
    return(
        <button className="button" onClick={onClick}>{text}</button>
    )
}
export  default  Button