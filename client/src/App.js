import React from "react"
import  {useState,useEffect} from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./index.css"
//pages 

import SignUpForm from"./Pages/sign-up-page/sign-up-form.js";
import UserCountryInfo from  "./Pages/sign-up-page/phone-details.jsx"
import MessagesContainer from"./Pages/mails-page/mail.js";
import Chats from"./Pages/chats-page/chats-page.js";
import LoginForm from"./Pages/login-form/login-form.js"; 
import Dashboard from"./Pages/user-dashboard/Dashboard.js";
import PostPage from "./Pages/postPage/postpage.js"
//import IsLoading from "./components/isloading/isloading.js";
/*
import Comment from"./Pages/comment-folder/comment.js";

import WebcamCapture from "./components/webcam/webcam.js"
import HomePage from "./Pages/homepage/homepage.jsx"
*/

function App() {
  const [loading,setIsLoading]=useState(true)
   useEffect(()=>{
    setTimeout(function() {
      setIsLoading(false)
    }, 1000);
    
  },[])
  return (
    <div className="App">
   <div>

<Router>
<Routes>
{/*
<Route path="/"exact element=
{
 loading ? <IsLoading></IsLoading> :(
  <HomePage></HomePage>)
}>
</Route>
*/}


<Route path="register" element={ <UserCountryInfo></UserCountryInfo>}>
</Route>
<Route path="userinfo"element={<SignUpForm></SignUpForm>}>
</Route>



<Route path="login" element={ <LoginForm></LoginForm>}>
</Route>
<Route path="register">
<Route path="countryinfo" element={ <UserCountryInfo></UserCountryInfo>}>
</Route>
<Route path="userinfo"element={<SignUpForm></SignUpForm>}>
</Route>
</Route>

<Route path="chats"element={ <Chats></Chats>}>
</Route>

<Route path="message"element={ <MessagesContainer></MessagesContainer>}>
</Route>

<Route path="post"element={ <PostPage></PostPage>}>
</Route>
<Route path="dashboard"element={ <Dashboard></Dashboard>}>
</Route>
{/*


<Route path="comment"element={ <Comment></Comment>}>
</Route>


<Route path="webcam"element={ <WebcamCapture></WebcamCapture>}>
</Route>
*/}
</Routes>
</Router>
   </div>
    </div>
  );
}

export default App;
