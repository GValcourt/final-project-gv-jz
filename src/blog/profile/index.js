import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import { getUsersByPredThunk } from "../../services/user-thunks";
import YourArticles from "../home-page/your-articles";
import YourLikes from "./your-likes";

function ProfileComponent() {
    let params = useParams().uid
    //console.log(params);
    const [profile, setProfile] = useState({});
    async function fetchData() {
        if (params === undefined) {
            const { payload } = await dispatch(profileThunk());
            console.log(payload);
            setProfile(payload);
        }
        else{
            await dispatch(getUsersByPredThunk(['_id', params])).then(result => {console.log(result); setProfile(result.payload[0])});
        }
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    useEffect( () => {
        fetchData();
    }, []);
    console.log(profile.first_name);
    return (
            <div className="row">
                <div className="col m-3 mw-5">
                    {profile && (
                        <div className="d-flex justify-content-center">
                            <div className="col-10">
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
                            </div>
                        </div>
                    )}
                </div>
                <div className="col mw-2">
                    <YourArticles/>
                </div>
                <div className="col mw-2">
                    <YourLikes/>
                </div>
            </div>
    );
}

export default ProfileComponent;