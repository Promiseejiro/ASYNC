import React from "react"
import {Link} from "react-router-dom"
import "./btn.css"


const Btn =({event,text,icon,bgColor,color,bdRadius,to,fontsize})=>{
  return (
    <React.Fragment>
    <Link to={`${to}`}>
   <button onClick={event} className="small-btn"style={{backgroundColor:bgColor,color:color,borderRadius:bdRadius,fontSize:"18px"}}>
   {icon}
   <span className="small-btn-text">  {text}</span>
 
   </button> 
   </Link>
    </React.Fragment>
)
}
export default Btn