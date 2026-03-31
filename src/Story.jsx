import React, { useEffect, useState } from 'react'
import    {useNavigate} from 'react-router-dom'

function Story() {

  const [Stories,setStories]=useState([]);
  const navigate=useNavigate();

  let tot=0;

  useEffect(()=>{
    fetch('http://localhost:5000/story')
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  })
  return (
    <div className='story d-flex  story-align'>
       <div className='d-none'>
              {tot=Stories.length}
        </div>
      {Stories.length>0 ?(
        Stories.map((story)=>(
          <div key={story.id} className='mx-4' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-border'>

            <img className='story-db rounded-circle' src={story.user.profile_picture} alt="" />

            </div>
            
            <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
        ):(
        <p>loading</p>
      )}

    </div>
  )
}

export default Story