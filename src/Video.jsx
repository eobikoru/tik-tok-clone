import React,{useRef, useState} from 'react'
import FooterVideo from './FooterVideo';
import './Video.css'
import SideBar from './SideBar';
function Video() {
    const [playing , setPlaying] = useState(false)
    const videoRef = useRef(null);
    const onVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
       
    }
    return (
        <div className='video'>
        <video loop  onClick={onVideoPress} ref={videoRef} className='video__player'  src="https://v16-webapp.tiktok.com/2f73464b10fa48ccd92b2bdb9b7dcf02/626ef7b4/video/tos/useast2a/tos-useast2a-ve-0068c004/b05d9da9999e41d991df1f78b3efec61/?a=1988&br=2946&bt=1473&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HF2Myq8ZRIeRwe2NoWoyl7Gb&l=20220501151208010223073027114555E4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amptajQ6ZnJoPDMzNzczM0ApOjY2NmY0PGU7NzM6OjZpOmdjcS1ocjRfc2dgLS1kMTZzcy8wNV5fYzYxNTIyMTM1MjQ6Yw%3D%3D&vl=&vr="></video>
         <FooterVideo 
         channel ="@Daniel emeka"
          description="check out the young boy running "
          song="asis noops"
        />
        <SideBar   likes={233} shares={112} messages={88}/>
        </div>
    )
}

export default Video