import React, { useState} from "react";
import {Link} from "react-router-dom";
import { createArticleThunk} from "../../services/article-thunks";
import { checkLocationThunk } from "../../services/search-thunk";
import { postImageThunk } from "../../services/image-thunk";
import {useDispatch, useSelector}
  from "react-redux";

  //TODO: allow multiple images to be saved; might not support that in the long run

const CreateArticleComponent = ()=>{
    const currentUser = useSelector(state => state.auth);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();
    const createArticle = (newArticle) => {
        dispatch(createArticleThunk(newArticle))}
    const checkLocation = async () => {
        //console.log(search);
        dispatch(checkLocationThunk({locationName: search})).then(result => {setResults([...results, ...result.payload.candidates]); console.log(result)
        });
    }
    function removeResultfromState(place_id){
        setResults(results.filter(location => location.place_id !== place_id))
    }
    function justSaveNeededStuff (location){
        return {locationName : location.name, placeID : location.place_id}
    }
    function postAllImages(files){
        for (let item = 0; item<files.length; item++){
            //console.log(files[item])
            dispatch(postImageThunk(files[item]))
        }
    }

    return (
        <div className="container">
            {currentUser === null? <>
            <div className="row" style={{width:'100%'}}>

                <div className="col float-left">
                <Link to="/profile"><button className="border-0 bg-white" type="reset" form="article_form">X</button></Link>
                </div>
                <div className="col-4 float-right">
                <Link to="/profile">
                <button className="rounded-pill border-1 bg-black border-white text-white"
              form="article_form" onClick={(e) => {let array = [];
                var inp = document.getElementById('image_upload');
                for (var i = 0; i < inp.files.length; ++i) {
                var name = inp.files.item(i).name;
                array.push(name)} console.log(array);createArticle({
                  _posterid : currentUser._id,
                  title: document.getElementById('title').value,
                  text: document.getElementById('article_text').value,
                  images: array,
                  location: results.map(justSaveNeededStuff)});
                  //console.log(document.getElementById("image_upload").files);
                  postAllImages(document.getElementById("image_upload").files)}}>Save</button>
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
                    <input id="image_upload" type="file" multiple={true}/></li>
                <li className="list-group-item">
                    <label htmlFor="location_string">Location (Be as specific as possible)</label>
                    <br></br>
                    <input id="location_string"
                        value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="rounded-pill border-1 bg-black border-white text-white" type='button'
                        onClick={(e) => checkLocation()}>Check Location</button><br></br>
                    <ul>
                        {results.map(location => <li key={location.place_id}>
                            <h6>{location.name}</h6>
                            <p>{location.formatted_address}</p>
                            <button onClick={(e)=>{removeResultfromState(location.place_id)}}>
                                Delete</button></li>)}
                        {/*console.log(results)*/}
                    </ul>
                </li>
            </form>
            </>: <><h1>
                Create Article
            </h1>
            <p>
                Please log in to create an article!</p>
                <Link to="/login"><button className="rounded-pill border-1 bg-black border-white text-white">Go to Login!</button></Link></>}
      </div>
      );
}
export default CreateArticleComponent