
//based on a given place id, display results

import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { getPlaceDetailsThunk } from "../../services/search-thunk";
import { findArticlebyLocationThunk } from "../../services/article-thunks";
import {useDispatch, useSelector}
  from "react-redux";
import MapContainer from "../google-map";

//TODO: add handling of loggedin state


function LocationComponent(){
    const searchID = useParams().params;
    const {loading} = useSelector((state) => state.articles)
    //console.log(loading)
    const [results, setResults] = useState({});
    const [map, makeMap] = useState(<></>)
    const [articles, setArticles] = useState([])
    const dispatch = useDispatch();
    const getDetails = async () => {
        await dispatch(getPlaceDetailsThunk(searchID)).then(result => {
            setResults(result.payload.result);
            //console.log(result.payload.result); 
            let location = {locationName:result.payload.result.name,
                lat:result.payload.result.geometry.location.lat,
                lng: result.payload.result.geometry.location.lng}
            //console.log(location);
            makeMap(<MapContainer location={location}/>)});
        await dispatch(findArticlebyLocationThunk(searchID)).then(result => {setArticles(result.payload); //console.log(result.payload);
     });
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
            <p>
                <b>Location Summary:</b> {results.editorial_summary !== undefined ?
                results.editorial_summary.overview:'No summary provided by Google'}
            </p>
            {
            loading &&
            <li className="list-group-item">
                Loading...
            </li>
            }
            {
            (articles.length > 0 && loading===false)?
                <div>
                    <h4>
                        Articles connected to this location:
                    </h4>
                    <ul>
                        {articles.map(article => <li key={article._postid} className="list-group-item">
                            <Link to={`/article/${article._id}`}>{article.title}</Link></li>)}
                    </ul>
                </div>
            :
            <div>
                <h4>
                    No articles are connected to this place
                </h4>
            </div>
            }
            
      </div>
      );
}
export default LocationComponent