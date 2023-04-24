import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getUsersByPredThunk } from '../../services/user-thunks.js';

function YourFollows(profile) {
    const currentUser = useSelector(state => state.auth);
    const [follows, setFollows] = useState([])
    let dispatch = useDispatch();
    //console.log(profile.profile)
    //console.log(params)
    async function getData () {
        if(profile.profile.follows !== null && profile.profile.follows !== undefined){
            let tempArray = [];
            for (let i =0; i<profile.profile.follows.length; i++){
                let tempValue = await dispatch(getUsersByPredThunk(['_id',profile.profile.follows[i]])).then(res => res.payload[0]);
                tempArray.push(tempValue);
            }
            //console.log("values:", tempArray);
            setFollows(tempArray)
            //console.log(follows)
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
            <div className="mt-4">
                <h4 className="display-5 font-24">Your Follows</h4>
                {follows.length === 0 ? (
                    <h6 className="text-muted">You don't follow anyone yet.</h6>
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
        )
    }
}

export default YourFollows;