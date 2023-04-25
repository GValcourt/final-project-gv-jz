import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import * as followsService from "../../services/follows-service";
import { getUsersByPredThunk } from "../../services/user-thunks";
import YourArticles from "../home-page/your-articles";
import YourLikes from "./your-likes";
import YourFollows from "./your-follows";

function ProfileComponent() {
    let params = useParams().uid
    const currentUser = useSelector(state => state.auth.currentUser);
    //console.log("current user: ", currentUser);
    const [profile, setProfile] = useState({});
    const [follows, setFollows] = useState([]);
    const [loading,setLoading] = useState(true);
    //console.log(profile)
    const followUser = async () => {
        await followsService.userFollowsUser(currentUser._id, profile._id);
        setLoading(true)
      };
    const unfollowUser = async () => {
        await followsService.userUnfollowsUser(currentUser._id, profile._id);
        setLoading(true)
      };
    async function fetchData() {
        if (params === undefined) {
            const { payload } = await dispatch(profileThunk());
            //console.log(payload);
            setProfile(payload);
            setLoading(false)
        }
        else{
            await dispatch(getUsersByPredThunk(['_id', params])).then(result => {setProfile(result.payload[0])});
        }
        if (profile._id !== undefined){
            setLoading(true)
            let tempArray = await followsService.findFollowsByFollowerId(profile._id)
            setFollows(tempArray)
            setLoading(false)
        }
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    useEffect( () => {
        fetchData();
    }, [params]);
    //console.log(profile.first_name);
    return (
            <div className="row">
                <div className="col m-3 mw-5">
                    {profile && (
                        <div>
                            <div className="d-flex justify-content-center">
                                <div className="col-10">
                                    <div className="row mb-2">
                                        <div className="col"><img className="rounded img-thumbnail" src="./images/avatar-placeholder.png"/></div>
                                        <div className="col"/>
                                    </div>
                                    <h1 className="display-4 font-36">Profile</h1>
                                    <div>
                                        <label className="col-form-label pe-2">First Name</label>
                                        <input type="text"
                                               value={profile.first_name}
                                               className="form-control"
                                               onChange={(event) => {
                                                   const newProfile = {
                                                       ...profile,
                                                       first_name: event.target.value,
                                                   };
                                                   setProfile(newProfile);
                                               }}
                                        />
                                    </div>
                                    <div>
                                        <label className="col-form-label pe-2">Last Name</label>
                                        <input type="text"
                                               value={profile.last_name}
                                               className="form-control"
                                               onChange={(event) => {
                                                   const newProfile = {
                                                       ...profile,
                                                       last_name: event.target.value,
                                                   };
                                                   setProfile(newProfile);
                                               }}
                                        />
                                    </div>
                                    <div>
                                        <label className="col-form-label pe-2">Username</label>
                                        <input type="text"
                                               value={profile.username}
                                               className="form-control"
                                               onChange={(event) => {
                                                   const newProfile = {
                                                       ...profile,
                                                       username: event.target.value,
                                                   };
                                                   setProfile(newProfile);
                                               }}
                                        />
                                    </div>
                                    <div>
                                        <label className="col-form-label pe-2">Location</label>
                                        <input type="text"
                                               value={profile.location}
                                               className="form-control"
                                               onChange={(event) => {
                                                   const newProfile = {
                                                       ...profile,
                                                       location: event.target.value,
                                                   };
                                                   setProfile(newProfile);
                                               }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="bio" className="form-label mt-2">Bio</label>
                                        <textarea className="form-control" id="bio" rows="3" value={profile.bio}
                                                  onChange={(event) => {
                                                      const newProfile = {
                                                          ...profile,
                                                          bio: event.target.value,
                                                      };
                                                      setProfile(newProfile);
                                                  }}/>
                                    </div>
                                    { ((currentUser !== undefined && currentUser !== null) && currentUser._id === profile._id )&&
                                    <div className="d-flex mt-3">
                                        <div className="d-flex me-2">
                                            <button className="btn palette-btn-blue" onClick={save}>Save</button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn palette-btn-bg text-white"
                                                    onClick={() => {
                                                        dispatch(logoutThunk());
                                                        navigate("/login");
                                                    }}>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                    }
                                    { ((currentUser !== undefined && currentUser !== null) &&
                                     currentUser._id !== profile._id && !loading )&&
                                    <div className="d-flex mt-3">
                                        {follows.some(follow=>follow.follower === currentUser._id)?
                                                <div className="col-2">
                                                    <button className="btn palette-btn-bg text-white" onClick={unfollowUser}>
                                                        Unfollow {profile.username}
                                                    </button>
                                                </div>
                                                :
                                                <div className="col-2">
                                                    <button className="btn palette-btn-bg text-white" onClick={followUser}>
                                                        Follow {profile.username}
                                                    </button>
                                                </div>

                                        }
                                        
                                    
                                </div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {
                    Object.keys(profile).length > 0 && <>
                    <div className="col mw-2">
                        <YourArticles profile={profile} params={params}/>
                    </div>
                    <div className="col mw-2">
                        <YourLikes profile={profile} params={params}/>
                    </div>
                    <div className="col mw-2">
                        <YourFollows profile={profile} params={params}/>
                    </div>
                    </>

                }
                
            </div>
    );
}

export default ProfileComponent;