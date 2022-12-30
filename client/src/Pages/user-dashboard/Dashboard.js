import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./Dashboard.css";
import axios from "axios";
import PostCard from "../../components/post-card/post-card.js";
import FollowerCard from "../../components/follower-card/followers-card.js";

import SideBar from "../../components/sideBar/sidebar";
import MobileNav from "../../components/mobile-nav/mobile-nav";
import Avarta from "../../components/avarta-folder/avarta.js";
import AvartaGroup from "../../components/avarta-group/avarta.js";
import Btn from "../../components/smallBtn/btn.js";
import UserPublicDetails from "../../components/user-public-details/user-public-details.js";
import UserName from "../../components/user-name/user-name.js";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GiSchoolBag } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideo] = useState([]);
  const [recordVideo, setrecordVideo] = useState([]);
  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const decodeToken = jwtDecode(token.token);
    setUser(decodeToken);
    try {
      const data = await axios.get("http://localhost:5000/user/dashboard", {
        headers: {
          authorization: `Bearer ${token.token}`,
        },
      });
      setFriends(data.data);
    } catch (error) {
      console.log("provide token");
    }
  };

  const getImage = async () => {
    try {
      const data = await axios.get("http://localhost:5000/user/getimage");
      setImages(data.data);
      console.log(data.data);
      // data.data.map((b) => {
      //   console.log(b.filePath);
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const getvideo = async () => {
    try {
      const data = await axios.get("http://localhost:5000/getvideo");
      setVideo(data.data.videos);
      console.log(data.data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecordedvideo = async () => {
    try {
      const data = await axios.get("http://localhost:5000/getrecordedvideo");
      setrecordVideo(data.data.videos);
      console.log(data.data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  const arrangePostHandler = async () => {
    const mergepost = await [...images, ...recordVideo, ...videos];
    mergepost.map((i) => {
      console.log(i.filePath);
    });
    setPosts(mergepost);
    console.log(mergepost);
  };
  useEffect(() => {
    getUser();
    getImage();
    getvideo();
    getRecordedvideo();
  }, []);

  useEffect(() => {
    arrangePostHandler();
  }, [images, videos, recordVideo]);

  return (
    <React.Fragment>
      <div className="dashboard-main-container">
        <SideBar children={<MobileNav />} width="300px"></SideBar>
        <div className="dashboard-wrapper">
          <div className="background-container">
            <div className="back-to-dashboard-btn">
              <Btn
                icon={BsArrowLeft}
                fontsize="2rem"
                bgColor="rgba(0,0,0,.1)"
                color="#fd683d"
              />
            </div>
            <img
              className="cover-photo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzwpnBdzmNIX7zHmfR-qe81AInhPMllGxfA&usqp=CAU"
            />
            <div className="user-avatar"></div>
            <div className="search-user-info">
              <Btn
                color="#fff"
                bgColor="#fd683d"
                icon={<AiOutlineSearch />}
                bdRadius="20px"
              />
            </div>
          </div>
          <div className="header-section">
            <UserName text={user.name} />
            <h4 className="nick-name">@async board</h4>
          </div>

          <div className="followers-card">
            <div className="friends-container">
              <AvartaGroup info="Following" num={200}></AvartaGroup>
              <AvartaGroup info="Followers" num={130}></AvartaGroup>
              <AvartaGroup info="Post" num={1370}></AvartaGroup>
            </div>
          </div>
          <div className="edit-profile-container">
            <Btn
              text="Add to story"
              icon={<AiFillPlusCircle />}
              bgColor="#fd683d"
              color="#fff"
              bdRadius="10px"
            />
            <Btn
              bgColor="rgba(0,0,0,.1)"
              text="Edit profile"
              icon={<MdModeEdit />}
              bdRadius="10px"
            />
            <Btn
              text={null}
              bgColor="rgba(0,0,0,.1)"
              to=""
              icon={<BsThreeDots />}
              bdRadius="10px"
            />
          </div>
          <div className="user-details-section">
            <UserPublicDetails icon={<GiSchoolBag />} />
            <UserPublicDetails icon={<GiSchoolBag />} />
            <UserPublicDetails icon={<GiSchoolBag />} />
          </div>

          <div className="posts-section">
            {posts.map((post, index) => (
              <div key={{ index }}>
                <PostCard key={index} post={post} />
              </div>
            ))}
          </div>
        </div>
        <Outlet/>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
