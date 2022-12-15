import React from "react"
import MessageTime from "../message-time-folder/message-time.js"
import "./message.css"

const Message =({bRadius,bgColor, position,color,text})=>{
  return (
    <React.Fragment>
    <div className="message-container"style={{
      alignItems: position
    }}>
    <p style={{
      borderRadius: bRadius, backgroundColor:bgColor,color:color
    }}>{/*helll Africa french greatest thing ever and ever settle down and you are not the only ones that*/}
    {text}</p>
    <MessageTime/>
    </div>
    </React.Fragment>
    )
}
export default Message