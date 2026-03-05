import React, { useEffect, useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'


function Viewstory() {

    const {id,tot}=useParams();

    const [story,setStory]=useState(null);

   const navigate=useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/story/${id}`)
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(err=>console.log(err))
    },[id]);

    if (id > tot || id<=0){
      navigate('/');
    }
  
  return (
    <div className='my-5 ' >
        {story? <div className='d-flex justify-content-center align-items-center'>
            <Link  to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className='bi bi-arrow-left-circle-fill'></i></Link>
           <p className='mx-5 mt-3'>   {story.user.username} </p>
              <img src={story.user.image_url} alt="story not found" className='mx-5' />
            <Link  to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className='bi bi-arrow-right-circle-fill'></i></Link>

        </div>:<div>loaded</div>}

    </div>
  )
}


export default Viewstory