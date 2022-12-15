import "./homepage.css"
import {Link} from "react-router-dom"
// svg
import homepageSvg from "../../utils/homepage.svg"

import Btn from "../../components/sign-loggin-btn/btn.js"

//import FileUpload from "../../components/fileupload/fileupload.js"

const HomePage = ()=>{
  return(
    <div className="homepage-wrapper">

    <div>
    <h2 className="home-page-header">Connect <span id="with"> With </span> </h2>
    
    <div className="box-wrapper">
    <h3 className="family-box">family</h3> 
    <h3 className="friends-box">friends</h3> 
    <h3 id="and-box">and</h3> 
    <h3 className="clients-box">client</h3> 
    </div>
    
    <div className="btn-wrapper">
         <Link to="/register">
        <Btn  bgColor="#fd683d"color="#fff"text="Login"></Btn>
    </Link>
    
    <Link  to="/login">   <Btn bgColor="#fff"color="#fd683d"text="Register"></Btn> </Link>
    
   <fileupload/>
  </div>
    
    </div>
    <div className="top-conner-svg">
    <img src={homepageSvg} alt="img"/>
    </div>
    </div>
    )
}
export default HomePage