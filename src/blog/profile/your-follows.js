import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getUsersByPredThunk } from '../../services/user-thunks.js';
import {findFollowsByFollowedId, findFollowsByFollowerId} from '../../services/follows-service.js';

function YourFollows(profile) {
    const currentUser = useSelector(state => state.auth);
    const [follows, setFollows] = useState([])
    const [followers, setFollowers] = useState([])
    let dispatch = useDispatch();
    //console.log(profile.profile)
    //console.log(params)
    async function getData () {
        //console.log(profile.profile._id)
        if(profile.profile._id !== null && profile.profile._id !== undefined){
            //console.log(profile.profile._id)
            let followArray = await findFollowsByFollowerId(profile.profile._id)
            //console.log("followArray", followArray)
            let temp1Array = [];
            for (let i =0; i<followArray.length; i++){
                let tempValue = await dispatch(getUsersByPredThunk(['_id',followArray[i].follower])).then(res => res.payload[0]);
                temp1Array.push(tempValue);
            }
            //console.log("values:", tempArray);
            setFollows(temp1Array)
            //console.log(follows)
            //console.log(profile.profile._id)
            let followerArray = await findFollowsByFollowedId(profile.profile._id)
            //console.log("followArray", followArray)
            let temp2Array = [];
            for (let i =0; i<followerArray.length; i++){
                let tempValue = await dispatch(getUsersByPredThunk(['_id',followArray[i].follower])).then(res => res.payload[0]);
                temp2Array.push(tempValue);
            }
            //console.log("values:", tempArray);
            setFollowers(temp2Array)
        }
        else{
            setFollows([]);
        }
    }
    useEffect(()=>{
        getData();
    },[profile])
    
    if( follows.length === 0){
        console.log("No followers");
        return(
            <div className="mt-4">
                <h4 className="display-5 font-24">Your Follows</h4>
                    <h6 className="text-muted">You don't follow anyone yet.</h6>
            </div>

        )
    }
    else {
        //console.log(locations);
        return (
            <>
            <div className="mt-4">
                <h4 className="display-5 font-24">Your Follows</h4>
                {followers.length === 0 ? (
                    <h6 className="text-muted">You don't follow anyone yet.</h6>
                ) : (
                    <div>
                        {followers.map(follower => (
                            <Card key={follower._id} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{follower.username}</Card.Title>
                                    <Link to={`/profile/${follower._id}`}>
                                        <Button variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-4">
            <h4 className="display-5 font-24">Your Followers</h4>
            {follows.length === 0 ? (
                <h6 className="text-muted">No one follows you yet.</h6>
            ) : (
                <div>
                    {follows.map(follower => (
                        <Card key={follower._id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{follower.username}</Card.Title>
                                <Link to={`/profile/${follower._id}`}>
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
        </>
        )
    }
}

export default YourFollows;