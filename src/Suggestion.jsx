import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestion() {


  const [Profile, setProfile] = useState(null);
  const [Suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch(fetch('http://localhost:5000/profile').
      then((data) => data.json()).
      then((data => setProfile(data))).
      catch(err => console.log(err)))


    fetch(fetch('http://localhost:5000/suggession').
      then((data) => data.json()).
      then((data => setSuggestion(data))).
      catch(err => console.log(err)))
  }, [])

  const handleFollow= async(id,username)=>{
    axios.post('http://localhost:5000/followers',{"id":id,"username":username})
    .then(alert('followed'))
    .catch(err=>console.groupCollapsed(err))
  }
  return (
    <div>
      <div className='suggestion w-75 m-4'>
        {Profile ?
          <div className='d-flex'>
            <img className='rounded-circle my-1' id='prof' src={Profile.profile_picture} alt="" />
            <p > <b >Tvk_sundar</b><br />{Profile.username} </p>
            <small className='ms-auto text-primary m-2'>Switch</small>
          </div>
          :
          <p>loading</p>

        }
        <div className='d-flex m-2'>
          <p>suggested for you</p>
          <b className='ms-auto'>see all</b>
        </div>
        {Suggestion.length > 0 ? (
          <div>
            {Suggestion.map((suggession) => (
              <div key={suggession.id}>
                <div className='d-flex my-3'>
                  <img className='rounded-circle db' src={suggession.profile_picture} alt="" />
                  <h5 >{suggession.username}</h5>
                  <a className='text-primary ms-auto btn btn-primary text-white px-2' onClick={()=>{(handleFollow(suggession.id,suggession.username))}}>Follow</a>
                </div>
              </div>

            ))}
          </div>
        ) : (
          <div>
            loading Posts
          </div>
        )}

      </div>

    </div>

  )
}

export default Suggestion

