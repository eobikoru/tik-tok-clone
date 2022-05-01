import React from 'react'
import './FooterVideo.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
function FooterVideo({channel , description , song}) {
  return (
    <div className='videofooter'>
      <div className="videofooter_text">
        <h4>{channel}</h4>
        <p>{description}</p>
        <div className="video_ticker">

        
        <MusicNoteIcon className='icn'/>
        <Ticker mode="smooth">
   
        {({ index }) => (
            <>
                <p> {song}</p>
            </>
        )}
        </Ticker>
        </div>
      </div>
      <img  className='videoFooter_record' src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
  )
}

export default FooterVideo