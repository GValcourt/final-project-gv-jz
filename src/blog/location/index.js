
//based on a given place id, display results

import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import { getPlaceDetailsThunk } from "../../services/search-thunk";
import {useDispatch}
  from "react-redux";
import MapContainer from "../google-map";

//TODO: add call to get articles with location string referenced in them


function LocationComponent(){
    const searchID= useParams().params;
    //console.log(searchID)
    const [results, setResults] = useState({});
    const [map, makeMap] = useState(<></>)
    const [articles, setArticles] = useState([])
    const dispatch = useDispatch();
    const getDetails = async () => {
        await dispatch(getPlaceDetailsThunk(searchID)).then(result => {/*console.log(result.payload.result);*/ setResults(result.payload.result);
                        makeMap(<MapContainer location={{locationName:result.payload.result.name, lat:result.payload.result.geometry.location.lat,
                            lng: result.payload.result.geometry.location.lng}}/>)});
    }
    useEffect(() => {
        getDetails();
      },[]);

    return (
        <div className="container">
            <h1>
                {results.name}
            </h1>
            <p>
                {results.vicinity}
            </p>
            {map}
      </div>
      );
}
export default LocationComponent