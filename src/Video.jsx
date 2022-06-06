import React, { useRef, useState } from "react";
import FooterVideo from "./FooterVideo";
import "./Video.css";
import SideBar from "./SideBar";
function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
         src={url}
      ></video>
      <FooterVideo channel={channel} description={description} song={song} />
      <SideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
