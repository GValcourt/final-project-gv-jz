
//based on a given query, display results

import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import { getLocationCandidatesThunk } from "../../services/search-thunk";
import {useDispatch}
  from "react-redux";
import { getUsersByPredThunk } from "../../services/user-thunks";
  //TODO: require being logged in so that poster id can be saved

const SearchComponent = ()=>{
    console.log(useParams())
    const { searchTerm } = useParams();
    console.log(searchTerm)
    const searchType = useParams()['*'].split('/')[1];
    const [userSearch, setUserSearch] = useState(searchTerm);
    const [locationSearch, setLocationSearch] = useState(searchTerm);
    const [userResults, setUserResults] = useState([]);
    const [locationResults, setLocationResults] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getLocationOptions = async () => {
        dispatch(getLocationCandidatesThunk({query : locationSearch})).then(result => {/*console.log(result.payload.results);*/ setLocationResults(result.payload.results)});
        navigate(`/search/locations/${locationSearch}`);
    }
    const getUsers = async () => {
        var searchParam = document.getElementById("search-type").value;
        dispatch(getUsersByPredThunk([`${searchParam}`, userSearch])).then(result => {//console.log(result.payload)
            if (result.payload.length === 0) {
                alert('No users found');
            }
            else {setUserResults(result.payload)}});
        navigate(`/search/users/${userSearch}`);
    }
    useEffect(() => {
        if (searchTerm) {
            console.log(searchTerm)
            if (searchType === 'users') {
                setUserSearch(searchTerm);
                getUsers();
            }
            if (searchType === 'locations') {
                setLocationSearch(searchTerm);
                getLocationOptions();
            }
        }
      },[searchTerm, searchType]);

    return (
        <div className="container">
            <div className="row" style={{width:'100%'}}>
                <h1>Search Panel</h1>
            </div>
            <br/>
            <div>
            <h2>
                Search for locations
            </h2>
                <label htmlFor="location_string">Location</label>
                <br></br>
                <input id="location_string"
                    value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)}/>
                <button className="rounded-pill border-1 bg-black border-white text-white" type='button'
                    onClick={(e) => {getLocationOptions()}}>Check Location</button><br></br>
                <ul>
                    {locationResults.map(location => <li key={location.place_id}>
                        <Link to={`/location/${location.place_id}`}>{location.name}</Link></li>)}
                </ul>
            </div>
            <div>
            <h2>
                Search for users
            </h2>
                <label htmlFor="user_string">Users</label>
                <br></br>
                <select name="search-type" id="search-type" className="rounded-pill border-1 bg-black border-white text-white">
                    <option value="username">Username</option>
                    <option value="user_type">User Type</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="location">Location</option>
                    <option value="website">website</option>
                    <option value="dateJoined">Date Joined</option>
                </select>
                <input id="user_string"
                    value={userSearch} onChange={(e) => setUserSearch(e.target.value)}/>
                <button className="rounded-pill border-1 bg-black border-white text-white" type='button'
                    onClick={(e) => {getUsers()}}>Get Users</button><br></br>
                <ul>
                    {userResults.map(user => <li key={user._id}>{user.username}</li>)}
                </ul>
            </div>
      </div>
      );
}
export default SearchComponent