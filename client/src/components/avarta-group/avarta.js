import React from "react"

import {AvatarGroup,Avatar} from "@mui/material";

import "./avarta.css"

const AvartaGroup =({info,num})=>{
  
  const arr =[1,2,3]
  
  return (
    <React.Fragment>
    <div className="numbers-of-follwers-container">
    <div className="followers-photo-avarta">
        <AvatarGroup max={4}>
    {arr.map((ar)=>(
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzwpnBdzmNIX7zHmfR-qe81AInhPMllGxfA&usqp=CAU" style={{height:25,width:20,borderRadius:10,marginLeft:-13}} />
    ))}
</AvatarGroup>
    <div className="totalFollowers">{num}</div>
    </div>
<h6 className="following">{info}</h6>
</div>
    </React.Fragment>
    )
}
export default AvartaGroup