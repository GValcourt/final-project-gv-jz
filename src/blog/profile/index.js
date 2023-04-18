import React from "react";
import {useSelector} from "react-redux";

function ProfileComponent(){
    const userProfile =
        // useSelector(state => state.profile.currentUser);
        {
            firstName: 'Jose',
            lastName: 'Annunziato',
            username: '@jannunzi',
            avatar: './images/gorges-grant-hotel.jpeg',
            bannerPicture: 'polyglot.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',
            dateJoined: '4/2009',
            reviewNum: '54'
        };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={userProfile.avatar} className="img-thumbnail" alt="Profile Picture" />
                </div>
                <div className="col-md-9">
                    <h1>{userProfile.firstName} {userProfile.lastName}</h1>
                    <p className='palette-text-green'><strong>{userProfile.username}</strong></p>
                    <p><strong>About: </strong>{userProfile.bio}</p>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <p><strong>Location:</strong> {userProfile.location}</p>
                            <p><strong>Website:</strong> {userProfile.website}</p>
                        </div>
                        <div className="col-sm-6">
                            <p><strong>Joined:</strong> {userProfile.dateJoined}</p>
                            <p><strong>Reviews:</strong> {userProfile.reviewNum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent



