import React, { useEffect, useState } from 'react'

function Posts() {

    const [Posts, setPosts] = useState([]);
    
     useEffect(()=>{
        fetch('http://localhost:5000/posts').
        then((data)=>data.json()).
        then((data=>setPosts(data))).
        catch(err=>console.log(err))
        
     },[]);
    return (

        <div className='d-flex justify-content-center my-2'>
            {Posts.length > 0 ? (
                <div>
                    {Posts.map((post)=>(
                        <div className='my-3' key={post.id}> 
                            <div className='d-flex'>
                             <img className='rounded-circle db' src={post.profile_picture} alt="" />
                             <h5 className="my-2">{post.username}</h5>
                             <i className="bi bi-three-dots my-2" id='book1'></i>
                            </div>
                            <img className='image my-3' src={post.image_url} alt="image not found" />
                            <div>
                            <i className="bi bi-heart">{post.likes}</i>
                            <i className="bi bi-chat">{post.comment}</i>
                            <i className="bi bi-send">{post.share}</i>
                            <i className="bi bi-bookmark" id='book'></i>
                            </div>
                            <div className='my-2'>
                                <b>{post.reach} views </b>
                                <p classname="cap">{post.caption}</p>    
                            </div>
                            <p>view all <b>{post.comment}</b>  comment</p>
                            <p>Add your Comment...</p>
                        </div>

                    ))}
                </div>
            ) : (
                <div>
                    loading Posts
                </div>
            )}
        </div>
    )
}




export default Posts