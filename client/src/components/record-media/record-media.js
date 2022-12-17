import { useState, useEffect, useRef } from "react";

const RecordMedia = () => {
  const videos = useRef();
  let chunks = []
  const handleMedia = async () => {
    try {
    //  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const  stream = await  navigator.mediaDevices.getUserMedia({audio: true, video:true})
      videos.current.srcObject = stream;
      videos.current.onloadedmetadata = function(e) {
      videos.current.play();
    }
    const mediaRecorder = new MediaRecorder(stream);
console.log(mediaRecorder.state)
    mediaRecorder.ondataavailable=function(e){
                chunks.push(e.data)
                console.log(chunks)
  } }catch (error) {
      console.log(error);
    }
  };

  // let mediaRecorder = new MediaRecorder(videos)

 
  // }
  return (
    <div>
    // <video ref={videos}  controls ></video>
    <video ref={videos}  controls ></video>
   <button   onClick={handleMedia}
>Record</button>
      
    </div>
  );
};

export default RecordMedia;
