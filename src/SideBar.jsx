import React,{useState} from 'react'
import './SideBar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SideBar({likes , shares ,messages}) {
   const [ liked , setLiked] = useState()
  return (
    <div className='videosidebar'>
        <div className="sidebar__btn">
           {liked ? 
           (
            <FavoriteIcon onClick={(e) => setLiked(false)}/>
           ):(
            <FavoriteBorderIcon   onClick={(e) => setLiked(true)}/>
           )}
           
           

            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="sidebar__btn">
            <MessageIcon/>
            <p>{messages}</p>
        </div>
        <div className="sidebar__btn">
            <ShareIcon/>
            <p>{shares}</p>
        </div>

    </div>
  )
}

export default SideBar