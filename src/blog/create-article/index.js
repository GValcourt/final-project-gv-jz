import React, { useState} from "react";
import {Link} from "react-router-dom";
import { createArticleThunk} from "../../services/article-thunks";
import { checkLocationThunk } from "../../services/search-thunk";
import {useDispatch}
  from "react-redux";
  //TODO: require being logged in so that poster id can be saved

const CreateArticleComponent = ()=>{
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();
    const createArticle = (newArticle) => {
        dispatch(createArticleThunk(newArticle))}
    const checkLocation = async () => {
        console.log(search);
        dispatch(checkLocationThunk({locationName: search})).then(result => {setResults(result.payload.candidates)});
    }

    return (
        <div className="container">
            <div className="row" style={{width:'100%'}}>

                <div className="col float-left">
                <Link to="/"><button className="border-0 bg-white" type="reset" form="article_form">X</button></Link>
                </div>
                <div className="col-4 float-right">
                <Link to="/">
                <button className="rounded-pill border-1 bg-black border-white text-white"
              form="article_form" onClick={(e) => createArticle({
                  title: document.getElementById('title').value,
                  text: document.getElementById('article_text').value,
                  image1: document.getElementById('image_upload').value,
                  location: {locationName : results[0].name,
                  lat: results[0].geometry.location.lat, lng:results[0].geometry.location.lng,
                  place_id: results[0].place_id}})}>Save</button>
                </Link>
                </div>
            </div>
            <h1>
                Create Article
            </h1>
            <form className="list-group text-start" id="profile_form">
                <li className="list-group-item">
                    <label htmlFor="title">Article Title</label>
                    <br></br>
                    <input id="title"
                        defaultValue={'Article Title'}/></li>
                <li className="list-group-item">
                    <label htmlFor="article_text">Article Text</label>
                    <br></br>
                    <textarea id="article_text" cols="50" rows="50"
                        defaultValue={'Text of the article'}/></li>
                <li className="list-group-item">
                    <label htmlFor="image_upload">Article Image</label>
                    <br></br>
                    <input id="image_upload" type="file"/></li>
                <li className="list-group-item">
                    <label htmlFor="location_string">Location (Be as specific as possible)</label>
                    <br></br>
                    <input id="location_string"
                        value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="rounded-pill border-1 bg-black border-white text-white" type='button'
                        onClick={(e) => checkLocation()}>Check Location</button><br></br>
                    <ul>
                        {results.map(location => <li key={location.place_id}>{location.formatted_address}</li>)}
                        {console.log(results)}
                    </ul>
                </li>
            </form>
      </div>
      );
}
export default CreateArticleComponent