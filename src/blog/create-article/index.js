import MapContainer from "../google-map"
import { Loader } from "@googlemaps/js-api-loader";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch}
  from "react-redux";


  //TODO: design a way to check to see if location is valid
  //TODO: require being logged in so that poster id can be saved
  //TODO: support for states

const CreateArticleComponent = ()=>{
    /*const dispatch = useDispatch();
    const createArticle = (newArticle) => {
        dispatch({
          type: 'CREATE_ARTICLE',
          article: newArticle
        })*/

    return (
        <div className="container">
            <div className="row" style={{width:'100%'}}>

                <div className="col float-left">
                <Link to="/"><button className="border-0 bg-white" type="reset" form="article_form">X</button></Link>
                </div>
                <div className="col-4 float-right">
                <Link to="/">
                <button className="rounded-pill border-1 bg-black border-white text-white"
              form="article_form" onClick={/*(e) => 
              createArticle({
                  title: document.getElementById('title').value),
                  text: document.getElementById('article_text').value}),
                  image1: document.getElementById('image_upload').value}),
                  location: {document.getElementById('location_string').value}})
                  */console.log("saved")}>Save</button>
                </Link>
                </div>
            </div>
            <h1>
                Create Article
            </h1>
            <form className="list-group text-start" id="profile_form">
                <li className="list-group-item">
                    <label for="title">Article Title</label>
                    <br></br>
                    <input id="title"
                    defaultValue={'Article Title'}/></li>
                <li className="list-group-item">
                    <label for="article_text">Article Text</label>
                    <br></br>
                    <textarea id="article_text" cols="50" rows="50"
                    defaultValue={'Text of the article'}/></li>
                <li className="list-group-item">
                    <label for="image_upload">Article Image</label>
                    <br></br>
                    <input id="image_upload" type="file"/></li>
                <li className="list-group-item">
                    <label for="location_string">Location</label>
                    <br></br>
                    <input id="location_string"
                    defaultValue={''}/></li>
            </form>
      </div>
      );
}
export default CreateArticleComponent