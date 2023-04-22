import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";

function ProfileComponent() {
    const { currentUser } = useSelector((state) => state.auth);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    useEffect( () => {
        async function fetchData() {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload)}
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

export default ProfileComponent



