import axios from "axios"
import React,{useState,useEffect} from "react"
import { BsChevronDown } from 'react-icons/bs';
import PageHeader from "../../components/pages-header/pages-header.js"
import "./phone-details.css"

import {Link,Outlet} from "react-router-dom"
import pageBackground from "../../utils/form-1.jpg"

import {GrFormNextLink} from "react-icons/gr"

const UserCountryInfo = ()=>{
  const [availableCountries, setAvailableCountry]=useState([]);
  const [showListOfCountry,setShowListOfCountry]=useState(false);
  const [selectedCountryCode,setSelectedCountryCode] =useState("+")
  const [selectedImag,setSelectedImg] =useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTWshZmnX0n-tCBKEuPpDLZMFFzwWN7FQoQ&usqp=CAU");
  const [inputing,setInputing] = useState(false)
  
  
 
  const fetchCountries=async()=>{
    try{
      const country = await axios.get("https://restcountries.com/v3.1/all")
        setAvailableCountry(country.data)
      }
      catch(error){
        alert("error")
      }
   }
   
   const handleShowListOfCountry=()=>{
     setShowListOfCountry(!showListOfCountry)
   }
   
  
 useEffect(()=>{
    fetchCountries()
  },[])
  
  
  return(
   <div>
   <div>
    <div className="sign-in-form-container">
      <div  className="page-background"> <img src={pageBackground} /></div>
        <div className="form-container">
            <PageHeader/>
    <div className="user-country-phone-details">
       <div className="form-type">
      <h3>Sign Up</h3>
      </div>
      <div className="main-wrapper"
      style={{
      border: showListOfCountry && "2px solid #fd683d"
    }}
      >
          <div><div className="details-wrapper">
    <div>
          <div className="select-country"onClick={
          handleShowListOfCountry}
          >
       <img className="flag" src={selectedImag} alt="flag" />
   <span className="country-code">{selectedCountryCode}</span>
   <BsChevronDown></BsChevronDown>
    </div>

    </div>

    <div className="user-phone-number-controller"
    onClick={()=>{
      setInputing(!inputing)
    }}
    >
    <input type="number"className='user-number'placeholder="Input Phone Number"/>
    </div>
    </div>
    
    {showListOfCountry  &&   <ul className="list-of-country">
 {availableCountries.map((country )=>(<li  
 
 onClick={()=>{
   if(country.idd){
     country.idd.suffixes.map((suffix)=>{
       setSelectedCountryCode(country.idd.root + suffix)
       setSelectedImg(country.flags.png)
       setShowListOfCountry(!setShowListOfCountry)
     })
   }
 }}
 >
 <div>   
 <img src={country.flags.png} alt=" "/>
 <span>{country.name.common}</span>
 </div>
 </li>
 ))  }
    </ul> }
  </div>
      </div>
    </div>
    <div id="next"><button ><Link to="/register/userinfo">Next</Link></button></div>
    </div>
    </div>
    </div>
        <Outlet/>
    </div>
    )
}

export default UserCountryInfo