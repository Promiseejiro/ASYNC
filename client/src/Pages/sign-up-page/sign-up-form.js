import React,{useState,useEffect} from "react"
import {Link,useNavigate} from "react-router-dom"
import PageHeader from "../../components/pages-header/pages-header.js"
import pageBackground from "../../utils/form-1.jpg"
import axios from "axios"
import "./sign-up-form.css"
//icons  
import {FaUserAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {AiFillEyeInvisible} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai"
import {IoIosArrowDropleftCircle} from "react-icons/io"
const SignUpForm = ()=>{
  const navigate =useNavigate()
  const defaultUser = {
    name:"",
    email:"",
    password:""
  }
  const [userInfo,setUserInfo] = useState(defaultUser)
const [showPassword,setShowPassword]=useState(false)
  
  const handleChange =(e)=>{
      setUserInfo({
        ...userInfo,[e.target.name]:e.target.value
      });
  }
  const handleShowPassword=()=>{
    setShowPassword(!showPassword)
  }
 const handleSubmit =async (e)=>{
   e.preventDefault()
 try{
   const data =  await axios.post("http://localhost:5000/register",{name:userInfo.name, email:userInfo.email, password:userInfo.password}
      )
  localStorage.setItem("user",JSON.stringify(data.data));
   if(data){
     alert(data.data.user.name)
 navigate("/user/chats")
   }
      }
     catch(error){
     alert(error)
   }
  }
  useEffect(()=>{
  },[])
  
  return(
  <div className="sign-in-form-container">
  <div  className="page-background"> <img src={pageBackground} /></div>
  <div className="form-container">
  <div className="back-icon">
  <button>
  <Link to="/register/countryinfo">
  <IoIosArrowDropleftCircle/>
  </Link>
  </button>
  </div>
      <PageHeader/>
      
    <div className="form-wrapper">
          <div className="form-type">
      <h3>Sign Up</h3>
      </div>
        <form onSubmit={handleSubmit} className="user-credential">
        <div className="form-control">
      <label><FaUserAlt/></label>
   <input type="text" name="name" onChange={handleChange} placeholder="Name"  />
        </div>
     <div className="form-control">
    <label><MdEmail/></label>
      <input type="email"name="email"onChange={handleChange} placeholder="Email" />
        </div>
        
     <div className="form-control">
    <label><RiLockPasswordFill/></label>
   <input type={showPassword ? "text" :"password"} name="password" onChange={handleChange} placeholder="Password" />
          <label onClick={handleShowPassword}>{!showPassword ? <AiFillEyeInvisible/> :<AiFillEye/>  }</label>
        </div>
     <div className="form-control">
    <label><RiLockPasswordFill/></label>
   <input type={showPassword ? "text" :"password"} name="password-password" onChange={handleChange}  placeholder="Confirm Password" />
       <label onClick={handleShowPassword}>   {!showPassword ? <AiFillEyeInvisible/> :<AiFillEye/>  }</label>
        </div>
   <button className="btn" style={{
     color:"#fff",
     backgroundColor:"#fd683d"
   }} type='submit'>Sign-Up</button>
<div className="or">
    <div className="line"></div>
    <span>Or</span>
    </div>
<button type="button" className="btn" style={{
     color:"#fd683d",
     backgroundColor:"#fff"
   }}><Link to="/login">Login</Link></button>
  </form>  
    </div>
   
  </div>

    </div>
    )
}

export default SignUpForm