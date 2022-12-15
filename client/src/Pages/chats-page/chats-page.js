import React,{useState,useEffect}from "react";
import jwtdecode from "jwt-decode"
import {Link} from "react-router-dom"
import "./chats-page.css";
import axios from "axios"
//pakages
import queryStrings from "query-string";
import io from "socket.io-client";
//components 
import Btn from "../../components/smallBtn/btn";
import UserName from "../../components/user-name/user-name.js";
import Avarta from "../../components/avarta-folder/avarta.js"
//css
import {BsSearch} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import {TbWorld} from "react-icons/tb"
import {AiOutlineSetting} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {MdOutlineCall} from "react-icons/md"
import {TbMessages} from "react-icons/tb"
import {GrFormCheckmark} from "react-icons/gr"


const Chats =()=>{
  const [chats,setChats]= useState([])
  const [name,setName]=useState("")
  const [personalId,setPersonalId]= useState("")
 
  
  const getUser =async() =>{
    const user =await JSON.parse(localStorage.getItem("user"))
// console.log(user)
 console.log(user.token)
 const decodeToken= jwtdecode(user.token)
  const {userId,name,iat,exp} = await decodeToken
  setName(name)
  setPersonalId(userId)
  try{
    const data =await axios.get("http://localhost:5000/user/dashboard",{
      headers:{
        authorization:`Bearer ${user.token}`
      }
    });
    setChats(data.data);
  }catch(error){
    console.log("provide token")
  }
  }
  useEffect(()=>{
 getUser()
},[])

  
  return (
    <React.Fragment>
    <div className="chats-container">
    <div className="search-chats-container">
    <div className="search-chat-controller">
    <BsSearch/>
    <input type="text"className="search-chats"/>
    </div>
    <div className="edit-chats-btn">
        <FaRegEdit/>
    </div>
    </div>
    <div className="chats">
    {chats.map((friend,index)=>{
      console.log(friend._id)
    return(
       <Link  key={index} onClick={(e) => {!name && e.preventDefault()
       }} to={`/message/?id=${friend._id}&sender=${personalId}`}> 
   <div className="chat">
  <div className="chat-user-info-container">   
    <Avarta avartawidth="3rem"avartaheight="3rem"/>
  <div>
  <UserName fontsize="14px"text={friend.name}/>
  <span className="chat-message">please build</span>
  </div>
  </div>
  <div className="chat-time-container">
  <span className="chat-message">2:30</span>
  <span>
  <GrFormCheckmark className="form-mark"/>
  <GrFormCheckmark className="form-mark"/>
  </span>
  </div>
   </div>
   </Link>
    )})
}
    </div>
    <div className="chats-options">
    <Btn icon={<TbWorld/>}bgColor="transparent"/>
        <Btn icon={<TbMessages/>} bgColor="transparent"/>
    <div className="add-new-chats">
    <div>
    <Btn icon={<AiOutlinePlus/>} color="#fff"bgColor="transparent"/>
    </div>
    </div>
    <Btn icon={<MdOutlineCall/>}bgColor="transparent"/>
    <Btn icon={<AiOutlineSetting/>}bgColor="transparent"/>
    </div>
    </div>
    </React.Fragment>
    )
}
export default Chats