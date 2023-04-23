import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import { getUsersByPred } from "../../services/user-service";

function ProfileComponent() {
    let params = useParams().uid
    console.log(params);
    const [profile, setProfile] = useState({});
    async function fetchData() {
        if (params === undefined) {
            const { payload } = await dispatch(profileThunk());
            console.log(payload);
            setProfile(payload)
        }
        else{
            const { payload } = await dispatch(getUsersByPred({_id:`${params}`}));
            console.log(payload);
            setProfile(payload)
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
        <div>
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                               value={profile.first_name}
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
                        <label>Last Name</label>
                        <input type="text"
                               value={profile.last_name}
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
                        <label>Username</label>
                        <input type="text"
                               value={profile.username}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile,
                                       username: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <label>Email</label>*/}
                    {/*    <input type="text"*/}
                    {/*           value={profile.email}*/}
                    {/*           onChange={(event) => {*/}
                    {/*               const newProfile = {*/}
                    {/*                   ...profile,*/}
                    {/*                   email: event.target.value,*/}
                    {/*               };*/}
                    {/*               setProfile(newProfile);*/}
                    {/*           }}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>
            <button onClick={save}>Save</button>
        </div>
    );
}

export default ProfileComponent;