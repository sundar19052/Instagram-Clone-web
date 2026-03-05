import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate=useNavigate();
  return (
    < div className="m-3 position-fixed">
    <div className='d-flex flex-column gap-4'>
        <img className='logo-text' src=".\src\assets\instagram text.png" alt="" />
        <div className='effect'><b><i className="bi bi-house-door"></i>Home</b></div>
        <div className='effect'><i className="bi bi-search"></i>Search</div>
        <div className='effect'><i className="bi bi-compass"></i>Explore</div>
        <div className='effect'><i className="bi bi-play-btn"></i>Reels</div>
        <div className='effect' ><i className="bi bi-chat-dots"></i>Messages</div>
        <div className='effect' ><i className="bi bi-heart"></i>Notification</div>
        <div className='effect'><i className="bi bi-plus-square"></i>Create</div>
        <div onClick={()=>{navigate('/Profile')}} className='effect'><i className="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div className='effect'><i className="bi bi-threads"></i>Threads</div>
        <div ><i className="bi bi-list"></i>More</div>
    </div>

    </div>
   
    
  )
}

export default Sidebar