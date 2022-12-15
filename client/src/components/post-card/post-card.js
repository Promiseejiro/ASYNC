import React from "react"
import {Link} from "react-router-dom"
import {ImageList,ImageListItem} from "@mui/material";

//css 
import "./post-card.css"
//components 
import Avarta from "../avarta-folder/avarta.js"
import Btn from "../smallBtn/btn.js"
import UserName from "../user-name/user-name.js"
// icon 

import {BiLike} from "react-icons/bi"
import {BsThreeDots} from "react-icons/bs"
import {BiMessageRounded} from "react-icons/bi"
import {BiShareAlt} from "react-icons/bi"
const PostCard =()=>{
  const items =[1]
  return (
    <React.Fragment>
    <div className="post-container">
    <div className="poster-header">
    <div>
    <Avarta avartaheight="3rem"avartawidth="3rem" />
    <div className="post-info">
   <UserName fontsize="12px"/>
    <div className="post-view-info">
    <span > 2min </span>
    <span className="post-dot">•</span>
    <span >Public</span>
    </div>
    </div>
    </div>
    <div className="post-option">
        <BsThreeDots/>
        </div>
    </div>
    <p className="post-caption">It's 137 DAYS TO GO...

Jam summit is not just an event for GATHERING youths and undergraduates. JAM SUMMIT is an EMPOWERMENT, A TRANSFORMATION, A LIFTING, AN EVENT FOR PURPOSE AND CLARITY, AN EVENT YOU DON'T WANT TO MISS!!

Get ready!
Get registered now with #2050 only !!!

2155100938
Uba
Mary okafor Sunday

Send proof of payment to 08085382246 Mary sunday (Sec Gen )</p>
<ImageList sx={{ height: "10rem" }} cols={1} rowHeight={164}>
  {items.map((item) => (
    <ImageListItem key={item.img} >
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzwpnBdzmNIX7zHmfR-qe81AInhPMllGxfA&usqp=CAU"
        alt="set of image"
      />
    </ImageListItem>
  ))}
</ImageList>
<div className="post-comment-section"style={{fontSize:"20px"}}>
<Btn icon={<BiMessageRounded/>} to="/comment"bgColor="transparent"/>
<Btn  icon={<BiLike/>} bgColor="transparent"/>
<Btn icon={<BiShareAlt/>} bgColor="transparent"/>
<Btn text="Related post" bgColor="transparent"/>
</div>
    </div>
    </React.Fragment>
    )
}
export default PostCard