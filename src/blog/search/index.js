
//based on a given query, display results

import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import { getLocationCandidatesThunk } from "../../services/search-thunk";
import {useDispatch}
  from "react-redux";
  //TODO: require being logged in so that poster id can be saved

const SearchComponent = ()=>{
    const { searchTerm } = useParams();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getLocationOptions = async () => {
        dispatch(getLocationCandidatesThunk({query : search})).then(result => {console.log(result.payload.results); setResults(result.payload.results)});
        navigate(`/search/${search}`);
    }
    useEffect(() => {
        if (searchTerm) {
            getLocationOptions();
        }
      }, [searchTerm]);

    return (
        <div className="container">
            <div className="row" style={{width:'100%'}}>
                <div className="col float-left">
                <Link to="/"><button className="border-0 bg-white" type="reset" form="article_form">X</button></Link>
                </div>
            </div>
            <h1>
                Search for hotels
            </h1>
                <label htmlFor="location_string">Location</label>
                <br></br>
                <input id="location_string"
                    value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="rounded-pill border-1 bg-black border-white text-white" type='button'
                    onClick={(e) => {getLocationOptions()}}>Check Location</button><br></br>
                <ul>
                    {results.map(location => <li key={location.place_id}>
                        <Link to={`/location/${location.place_id}`}>{location.name}</Link></li>)}
                </ul>
      </div>
      );
}
export default SearchComponent