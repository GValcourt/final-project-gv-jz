import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {findArticlebyLocationThunk} from '../../services/location-thunk.js'

function YourLikes(profile) {
    const [locations, setLocations] = useState([])
    let dispatch = useDispatch();
    //console.log(profile.profile)
    //console.log(params)
    async function getData () {
        if(profile.profile.likes !== null && profile.profile.likes !== undefined){
            let tempArray = [];
            for (let i =0; i<profile.profile.likes.length; i++){
                let tempValue = await dispatch(findArticlebyLocationThunk(profile.profile.likes[i])).then(res => res.payload);
                tempArray.push(tempValue);
            }
            //console.log("values:", tempArray);
            setLocations(tempArray)
        }
        else{
            setLocations([]);
        }
    }
    useEffect(()=>{
        getData();
    },[profile])
    
    if( locations.length === 0){
        console.log("No locations");
        return(
            <div className="mt-4">
                <h4 className="display-5 font-24">Your Liked Places</h4>
                    <h6 className="text-muted">You haven't liked any locations yet.</h6>
            </div>

        )
    }
    else {
        //console.log(locations);
        return (
            <div className="mt-4">
                <h4 className="display-5 font-24">Your Liked Places</h4>
                {locations.length === 0 ? (
                    <h6 className="text-muted">You haven't liked any locations yet.</h6>
                ) : (
                    <div>
                        {locations.map(location => (
                            <Card key={location._id} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{location.locationName}</Card.Title>
                                    <Link to={`/location/${location.placeID}`}>
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

export default YourLikes;