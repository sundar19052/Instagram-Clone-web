import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [unfollowed,setUnfollwed]=useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/profile')
            .then(data => { setProfile(data.data) })
            .catch(err => console.log(err))


        axios.get('http://localhost:5000/followers')
            .then(data => { setFollowers(data.data)})
            .catch(err => console.log(err))


    }, [unfollowed])

    function HandleOnchange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const handleUpdate = async () => {
        axios.put('http://localhost:5000/profile', profile)
            .then(console.log("updated"))
            .catch(err => console.log(err))




    }

    const handleUnfollow= async(id)=>{
        axios.delete(`http://localhost:5000/followers/${id}`)
        .then(alert("unfollowed"))
        .then(setUnfollwed(!unfollowed))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            {
                profile ? (
                    <div className='m-4 p-4'>
                        <img src={profile.profile_picture} alt="" className='profile rounded-circle ' />
                        <h5>{profile.username}</h5>

                        <input type="text"
                            value={profile.username}
                            name="username"
                            className='form-control my-4'
                            onChange={HandleOnchange}
                        />
                        <input type="text"

                            name="profile_picture"
                            value={profile.profile_picture}
                            className='form-control'
                            onChange={HandleOnchange}
                        />
                        <button className='btn btn-primary my-3'
                            onClick={handleUpdate}
                        >update</button>

                    </div>
                ) : (
                    <div>
                        loading
                    </div>
                )}

            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='p-3 d-flex'> 
                        {follower.username}
                        <button className='btn btn-danger text-white ms-auto ' onClick={()=>(handleUnfollow(follower.id))}>unfollow</button>
                    </div>
                ))
            ) : (
                <div>loading</div>
            )}
        </div>
    )
}

export default Profile