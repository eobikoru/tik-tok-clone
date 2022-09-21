import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1 style={{ color: "white" }}> emeka tiktok</h1>
      <div className="app__videos">
        <Video
          url="./videos/tiktok1.mp4"
          channel="Obikoru emeka channel"
          description="Wow this works......"
          song="Asake"
          likes={123}
          message={400}
          shares={345}
        />
        <Video
          url="./videos/tiktok2.mp4"
          channel="Pasolo channel"
          description="dry  jokes ......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok3.mp4"
          channel="Brain jotter channel"
          description="funny  this works......"
          song="burnaboy"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok4.mp4"
          channel="Mr funny channel"
          description="jesu loba this works......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok5.mp4"
          channel="shank channel"
          description="opor o......"
          song="wizkid"
          likes={9443}
          message={700}
          shares={399}
        />
        <Video
          url="./videos/tiktok6.mp4"
          channel="Pasolo channel"
          description="jesu loba this works......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok7.mp4"
          channel="Pasolo channel"
          description="jesu loba this works......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok8.mp4"
          channel="Pasolo channel"
          description="jesu loba this works......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
        <Video
          url="./videos/tiktok7.mp4"
          channel="Pasolo channel"
          description="jesu loba this works......"
          song="Asake"
          likes={923}
          message={500}
          shares={305}
        />
      </div>
    </div>
  );
}

export default App;
