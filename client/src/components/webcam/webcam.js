

import React, { useState,useRef } from 'react';

import Webcam from "react-webcam";
//
import "./webcam.css"



//alert(deviceSize.innerHeight)

const WebcamCapture = () => {
  const [src,setSrc]= useState("")
const webCamRef = useRef(null);

  const videoConstraints = {
  width: window.innerWidth,
  height: window.innerHeight,
  facingMode: "user"
}


const capturePhoto = React.useCallback(
 // const [deviceSize, setDeviceSize] = useState(getWindowSize//());
 
 

    () => {
      const imageSrc = webCamRef.current.getScreenshot();
      setSrc(imageSrc)
      
    },
    [webCamRef]
  );

  return(
    
    <React.Fragment>
    <div className="webcam-container">
  <Webcam
    audio={false}
    height={1000}
    screenshotFormat="image/jpeg"
    width={window.innerWidth - 50}
    videoConstraints={videoConstraints}
    ref={webCamRef}
  >
  </Webcam>
  <div className="camera-option-container">
        <button
        onClick={
          capturePhoto}
      >
        Capture photo
      </button>
   {src && (<div>
    <img src={src} alt="captured" />
    </div>) 
    }
  </div>
  </div>
  </React.Fragment>
)
}

export default WebcamCapture