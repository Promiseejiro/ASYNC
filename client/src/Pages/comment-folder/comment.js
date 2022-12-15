import React from "react"
import "./comment.css"

//components
import Avarta from "../../components/avarta-folder/avarta.js"
import UserName from "../../components/user-name/user-name.js";
import Btn from "../../components/smallBtn/btn.js";

//icons
import {BiLike} from "react-icons/bi"

const Comment =()=>{
  return (
    <React.Fragment>
    <div className="comment-container">
    <Avarta avartawidth="3rem"avartaheight="3rem"/>
    <div>
    <UserName fontsize="14px" />
    <p>Chipotle caoriso elegantly until you get home avarta-group BBB CCF folder  to</p>
    <div className="comment-option">  
    <span>6 min</span>
    <Btn icon={<BiLike/>} bgColor="transparent"to="#" color="rgba(0,0,0,.5)"/>
    <Btn  text="Reply"bgColor="transparent"to="#"/></div>
    </div>
    </div>
    </React.Fragment>
    )
}
export default Comment