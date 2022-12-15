import React,{useState,useEffect} from "react"
import {Link,useNavigate} from "react-router-dom"
import PageHeader from "../../components/pages-header/pages-header.js"
import pageBackground from "../../utils/form-1.jpg"
import axios from "axios"
import "../sign-up-page/sign-up-form.css"
//icons  
import {FaUserAlt} from "react-icons/fa"
//import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {AiFillEyeInvisible} from "react-icons/ai"
import {IoIosArrowDropleftCircle} from "react-icons/io"
const SignUpForm = ()=>{
  const navigate = useNavigate()
  const defaultUser = {
    username:"",
    password:""
  }
  const [userInfo,setUserInfo] = useState(defaultUser)

  
  const handleChange =(e)=>{
      setUserInfo({
        ...userInfo,[e.target.name]:e.target.value
      })
  }
  
  const handleSubmit =async (e)=>{
   e.preventDefault()
 try{
   const data =  await axios.post("http://localhost:5000/login",{name:userInfo.Username, password:userInfo.password}
      )
      console.log(data.data)
  localStorage.setItem("user",JSON.stringify(data.data))
   if(data){
    navigate("/chats")
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
  {/*  <UserCountryInfo/>*/}
  <div  className="page-background"> <img src={pageBackground} alt="background"/></div>
  <div className="form-container">
  <div className="back-icon">
  <button>
  <Link to="/async">
  <IoIosArrowDropleftCircle/>
  </Link>
  </button>
  </div>
      <PageHeader/>
      
    <div  className="form-wrapper">
          <div className="form-type">
      <h3>Sign in</h3>
      </div>
        <form onSubmit={handleSubmit} className="user-credential">
        <div className="form-control">
      <label><FaUserAlt/></label>
   <input type="text" name="Username" onChange={handleChange} placeholder="Username"  />
        </div>

     <div className="form-control">
    <label><RiLockPasswordFill/></label>
   <input type="text" name="password" onChange={handleChange} placeholder="Password" />
          <label><AiFillEyeInvisible/></label>
        </div>
   <button className="btn" style={{
     color:"#fff",
     backgroundColor:"#fd683d"
   }}>Log in</button>
  </form>  
    </div>
    <div className="or">
    <div className="line"></div>
    <span>Or</span>
    </div>
    
<button className="btn" style={{
     color:"#fd683d",
     backgroundColor:"#fff"
   }}><Link to="/async/register">Sign up</Link></button>
  </div>

    </div>
    )
}

export default SignUpForm