
import { useState, useEffect, useRef } from "react";

const RecordMedia = () => {
  const videos = useRef();
  const recordedFile =useRef()
  let chunks = []
  const handleMedia = async () => {
    try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
     videos.current.srcObject = stream
     RecordMedia.current = stream
      videos.current.onloadedmetadata = function(e) {
      videos.current.play();
    }
   }catch (error) {
      console.log(error);
    }
  }
   /* mediaRecorder.ondataavailable=function(e){
                chunks.push(e.data)
                alert(chunks)*/
                
  
      
 
 /* const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  recordedFile.current = blob
  };*/

  // let mediaRecorder = new MediaRecorder(videos)
const stopRecording =async()=>{
  const mediaRecorder = new MediaRecorder(RecordMedia);
MediaRecorder.onstop=function(e){
  let blob = new Blob(chunks,{type:"video/mp4"});
  chunks.push(blob)
}
}
 
const startRecording =()=>{
 const mediaRecorder = new MediaRecorder(videos);
alert(mediaRecorder.state)
try{
  mediaRecorder.start()
mediaRecorder.ondataavailable =function (e){
  chunks.push(e.data)
  alert("successful")
}
}catch(erro){
  alert("erro")
}


}
 
  // }
  return (
    <div>
     <video ref={videos}  controls ></video>
    <video ref={recordedFile}  controls ></video>
   <button   onClick={handleMedia}
>Record</button>

  <button onClick={stopRecording}>stop</button>
  <button onClick={startRecording}>start</button>
    </div>
  );
};

export default RecordMedia;