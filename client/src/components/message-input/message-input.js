import React,{useState,useEffect} from "react"
//css
import "./message-input.css";
//components 
import Btn from "../smallBtn/btn"
//icons 
import {TiCameraOutline} from "react-icons/ti";
import {BiSticker} from "react-icons/bi";
import {AiOutlineSend} from "react-icons/ai";
import {BiMicrophone} from "react-icons/bi";





const MessageInput =({sendMessageHandler})=>{
  const [inputValue,setInputValue]=useState("")
  
  const handleChange=(e)=>{
    setInputValue(e.target.value)
  }
  
  const submitHandler =()=>{
  sendMessageHandler(inputValue);
  setInputValue("")
  }
  
  useEffect(()=>{
},[inputValue]);
  return (
    <React.Fragment>
    <div className="input-container">
    <div className="message-form-controller">
        <input placeholder="Type here"type="text"onChange={handleChange}/>
        {!inputValue && (
        <div className="show-file-icon">
  <div className="camera-btn">
    <input id="file"type="file"name="file"/>
       <label htmlFor="file" className="file-label">
       <TiCameraOutline className="sticker-btn"/>
     </label> 
    </div>
       <Btn icon={<BiMicrophone/>} to="#"bgColor="transparent"></Btn>
       </div>
      )  }
    </div>
    {inputValue &&  (
    <div className="send-btn">
    <Btn event={submitHandler} icon={<AiOutlineSend/>}bgColor="rgba(0,0,0,.1)"bdRadius="50%"style={{marginLeft:".5px"}} to="#"/>
    </div>
    )
    }
    </div>
    </React.Fragment>
    )
}
export default MessageInput