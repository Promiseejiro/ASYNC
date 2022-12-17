 import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import jwtdecode from "jwt-decode";
import queryString from "query-string";
import io from "socket.io-client";
import axios from "axios";//css
import "./mails.css";
//icons
import { BsArrowLeft } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
//components
 import RecordMedia from "../../components/record-media/record-media";
import UserName from "../../components/user-name/user-name.js";
import Btn from "../../components/smallBtn/btn.js";
import Avarta from "../../components/avarta-folder/avarta.js";
import Message from "../../components/message-folder/message.js";
import MessageInput from "../../components/message-input/message-input.js";

// const ENDPOINT = "http://localhost:5000/chat";

// const socketIo = io(ENDPOINT)
const MessagesContainer = () => {
  const [searchParams] = useSearchParams();
  const searchId = searchParams.get("id");
  const personaId = searchParams.get("sender");
  const [message, setMessage] = useState("");
  const [msgs, setMsg] = useState([]);
  const [recipientprevMsgName, setRecipientName] = useState("");
  const [senderId, setSenderId] = useState(personaId);
  const [recipientId, setRecepientId] = useState(searchId);
  console.log(recipientId);
  console.log(senderId);
  const getMessages = async () => {
    try {
      const sentChat = await axios.post("http://localhost:5000/getchats", {
        to: recipientId,
        sender: senderId,
      });
      const recievedChat = await axios.post("http://localhost:5000/getchats", {
        to: senderId,
        sender: recipientId,
      });
      console.log(recievedChat.data);
      const data = await [...recievedChat.data, ...sentChat.data];
      const arrageMsg = data.sort((a, b) => {
        if (b.createdAt < a.createdAt) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log(arrageMsg);
      setMsg(arrageMsg);
    } catch (erro) {
      alert("error");
    }
  };
  const sendMessageHandler = (input) => {
    const data = axios.post("http://localhost:5000/chat", {
      msg: input,
      to: recipientId,
      sender: senderId,
    });
    getMessages();
  };

  // const parsed = queryString.parse(location.search);

  const [isOnline, setIseOnline] = useState(true);
  /*useEffect(()=>{
 socketIo.on('connect', () => {
    });
    socketIo.on('disconnect', () => {
    });
},[room,name])
*/

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const decodeToken = jwtdecode(user.token);
    const { userId, name, iat, exp } = decodeToken;
    getMessages();
  }, []);

  return (
    <React.Fragment>
      <div className="mail-container">
        <div className="message-header-container">
          <Btn
            icon={<BsArrowLeft />}
            bgColor="transparent"
            to="/chats"
            fontsize="1.1rem"
          />
          <div className="message-user-info">
            <div className="message-user-avatar">
              {" "}
              <Avarta avartawidth="2.5rem" avartaheight="2.5rem" />
              {isOnline && (
                <span className="online-info">
                  <GoPrimitiveDot className="online-dot" />
                </span>
              )}
            </div>
            <div>
              <UserName fontsize="12px" text="recipient-name" />
              {isOnline ? (
                <span>ONLINE</span>
              ) : (
                <span className="offline">6 min ago</span>
              )}
            </div>
          </div>

          <div className="call-option">
            <Btn
              icon={<BsCameraVideo />}
              bgColor="transparent"
              color="rgba(0,0,0,.8)"
            />
            <Btn
              icon={<MdCall />}
              bgColor="transparent"
              color="rgba(0,0,0,.8)"
            />
          </div>
        </div>

        <div className="messages">
          {msgs.map((msg, index) => {
            if (msg.sender === senderId && msg.to === recipientId) {
              return (
                <Message
                  bgColor="#fd683d"
                  bRadius="10px 10px 0 10px"
                  position="flex-end"
                  color="#fff"
                  text={msg.msg}
                  key={index}
                />
              );
            }
            if (msg.sender === recipientId && msg.to === senderId) {
              return (
                <Message
                  Message
                  bgColor="#fff"
                  bRadius="10px 10px 10px 0"
                  position="flex-start"
                  color="#fd683d"
                  text={msg.msg}
                  key={index}
                />
              );
            }
            
            // if(msg.sender===1){
            //   return (<Message bgColor="#fff"bRadius="0 10px 10px 10px"position="flex-start"text={msg.msg}/>)
            // }
            // if(msg.to===recipientId){
            // }
          })}
          <RecordMedia />
        </div>
        <div className="message-form-section">
          <MessageInput sendMessageHandler={sendMessageHandler} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessagesContainer;
