import React from "react";
import { Link } from "react-router-dom";
import { ImageList, ImageListItem } from "@mui/material";

//css
import "./post-card.css";
//components
import Avarta from "../avarta-folder/avarta.js";
import Btn from "../smallBtn/btn.js";
import UserName from "../user-name/user-name.js";
// icon

import { BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
const PostCard = ({ post }) => {
  const items = [1];
  return (
    <React.Fragment>
      <div className="post-container">
        <div className="poster-header">
          <div>
            <Avarta avartaheight="3rem" avartawidth="3rem" />
            <div className="post-info">
              <UserName fontsize="12px" />
              <div className="post-view-info">
                <span> 2min </span>
                <span className="post-dot">•</span>
                <span>Public</span>
              </div>
            </div>
          </div>
          <div className="post-option">
            <BsThreeDots />
          </div>
        </div>
        <p className="post-caption">{post.name}</p>
        <div>
          {items.map((item) => (
            <div key={item.img}>
              {post.filePath.includes(".jpg") ? (
                <img
                  src={`http://localhost:5000/${post.filePath}`}
                  alt="set of image"
                />
              ) : (
                ""
              )}
              {post.filePath.includes(".mp4") ? (
                <video
                  src={`http://localhost:5000/${post.filePath}`}
                  controls
                  autoPlay
                />
              ) : (
                ""
              )}
              {!post.fieldname === "blob" ? (
                <video
                  src={`http://localhost:5000/${post.filePath}.mp4`}
                  controls
                  autoPlay
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className="post-comment-section" style={{ fontSize: "20px" }}>
          <Btn
            icon={<BiMessageRounded />}
            to="/comment"
            bgColor="transparent"
          />
          <Btn icon={<BiLike />} bgColor="transparent" />
          <Btn icon={<BiShareAlt />} bgColor="transparent" />
          <Btn text="Related post" bgColor="transparent" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default PostCard;
