import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "./Dashboard.css";
import axios from "axios";
import PostCard from "../../components/post-card/post-card.js";
import FollowerCard from "../../components/follower-card/followers-card.js";

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
  const [user, setUser] = useState({});
  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const decodeToken = jwtDecode(token.token);
    try {
      const data = await axios.get("http://localhost:5000/dashboard", {
        headers: {
          authorization: `Bearer ${token.token}`,
        },
      });
      alert(data.data);
      alert("successful");
    } catch (error) {
      console.log("provide token");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="dashboard-main-container">
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
          <UserName />
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
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
