import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function YourLikes() {
    const currentUser = useSelector(state => state.auth);
    const [locations, setLocations] = useState([])
    setLocations([currentUser.currentUser.likes]);
    if(!locations){
        console.log("No locations");
    }
    console.log(locations);
    return (
        <div className="mt-4">
            <h4 className="display-5 font-24">Your Liked Places</h4>
            {locations.length === 0 ? (
                <h6 className="text-muted">You haven't liked any locations yet.</h6>
            ) : (
                <div>
                    {locations.map(location => (
                        <Card key={location.placeID} className="mb-3">
                            <Card.Body>
                                <Card.Title>{location.locationName}</Card.Title>
                                <Link to={`/articles/${location.id}`}>
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default YourLikes;