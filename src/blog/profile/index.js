import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import { getUsersByPredThunk } from "../../services/user-thunks";

function ProfileComponent() {
    let params = useParams().uid
    //console.log(params);
    const [profile, setProfile] = useState({});
    async function fetchData() {
        if (params === undefined) {
            const { payload } = await dispatch(profileThunk());
            console.log(payload);
            setProfile(payload)
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





//         return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-3">
//                     <img src={userProfile.avatar} className="img-thumbnail" alt="Profile Picture" />
//                 </div>
//                 <div className="col-md-9">
//                     <h1>{userProfile.firstName} {userProfile.lastName}</h1>
//                     <p className='palette-text-green'><strong>{userProfile.username}</strong></p>
//                     <p><strong>About: </strong>{userProfile.bio}</p>
//                     <hr />
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <p><strong>Reviews:</strong> {userProfile.reviewNum}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default ProfileComponent;
