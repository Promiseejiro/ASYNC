import React, { useState, useRef, useEffect } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";
import axios from "axios";

function RecordMedia() {
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: true,
    });

    refVideo.current.srcObject = mediaStream;
    refVideo.current.onloadedmetadata = function (e) {
      refVideo.current.play();
    };
    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "video/mp4" });
    recorderRef.current.startRecording();
  };

  function blobToFile(theBlob) {
     theBlob.lastModifiedDate = new Date();
    theBlob.name = new Date() + '.mp4';
    //  theBlob.mimetype ='video/mp4';
    return theBlob;
  }

  const handleStop = () => {
    recorderRef.current.stopRecording(() => {
      // const blobFile = {
      //   blob: recorderRef.current.getBlob(),
      //   fileName: new Date(),
      // };
      // console.log(blobFile);

      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = async () => {
    invokeSaveAsDialog(blob);
  //  console.log(blob);
   // const filename = Date.now() + blob.name + '.mp4';
    var myFile = blobToFile(blob);
    console.log(myFile)
    const formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("file", myFile);
    formData.append("name", "blobvideo");
    try {
      await axios.post("http://localhost:5000/videorecords", formData);
      // navigate("/dashboard");
      console.log('succes')
    } catch (error) {
      console.log("error occurred");
    }
    // console.log(window.URL.createObjectURL(blob));
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }
  }, [stream, refVideo]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleRecording}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleSave}>save</button>
        {blob && (
          <div>
            <video
              src={URL.createObjectURL(blob)}
              controls
              autoPlay
              style={{ width: "700px", margin: "1em" }}
            />
          </div>
        )}
        <video ref={refVideo} controls></video>
      </header>
    </div>
  );
}

export default RecordMedia;
