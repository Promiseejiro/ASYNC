import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
//pages
import SideBar from "./components/sideBar/sidebar";
// import SignUpForm from"./Pages/sign-up-page/sign-up-form.js";
// import UserCountryInfo from  "./Pages/sign-up-page/phone-details.jsx"
import MessagesContainer from "./Pages/mails-page/mail.js";
import Chats from "./Pages/chats-page/chats-page.js";
import LoginForm from "./Pages/login-form/login-form.js";
import Dashboard from "./Pages/user-dashboard/Dashboard.js";
// import Comment from"./Pages/comment-folder/comment.js";
// import PostPage from "./Pages/postPage/postpage.js"
import IsLoading from "./components/isloading/isloading.js";
import WebcamCapture from "./components/webcam/webcam.js";
// import HomePage from "./Pages/homepage/homepage.jsx"
import UserNavigationSideBar from "./components/user-navigation-side-bar/user-navigation-side-bar";
import AuthSideBar from "./components/auth-side-bar/auth-side-bar";
import MobileNav from "./components/mobile-nav/mobile-nav";

function App() {
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='async' element={ <div>
   {
 loading ? <IsLoading></IsLoading> :(
  <HomePage></HomePage>)
}
   </div>}>
   </Route> */}
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route path="chats" element={<Chats></Chats>} />
          </Route>

          {/* <Route path="check" element={<Dashboard></Dashboard>}>
            <Route
              path="c"
              element={<Chats></Chats>}
            />
          </Route> */}
          {/* <Route path='post' element={<PostPage></PostPage>}/> */}
          <Route
            path="imageorvideo"
            element={<WebcamCapture></WebcamCapture>}
          />
          <Route
            path="auth"
            element={
              <SideBar
                width="100%"
                children={<AuthSideBar></AuthSideBar>}
                outlet={<Outlet />}
              ></SideBar>
            }
          >
            <Route path="login" element={<LoginForm></LoginForm>} />
            {/* <Route path='register'element={<SignUpForm/>}/>
<Route path='imageorvideo' element={<WebcamCapture></WebcamCapture>}/>
<Route path='chats' element={<Chats></Chats>}/>  */}
          </Route>
          <Route path="message" element={<MessagesContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
