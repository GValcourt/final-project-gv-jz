import React, { useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
// import {Routes, Route} from "react-router";
// import { configureStore } from '@reduxjs/toolkit';
// import {Provider} from "react-redux";
import PostGrid from "./blog-post-grid";
import {findArticlesThunk} from "../../services/article-thunks.js";

function HomeComponent(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findArticlesThunk())
    },[dispatch]);
    let articles = useSelector(state => state.articles);
    //console.log(articles)
    let loading = useSelector(state => state.loading);
    return (
            <div className="container">
                <div className="jumbotron w-100">
                    <h1 className="display-4">Book It</h1>
                    <p className="lead">Hotel reviews for the modern nomad.</p>
                    <hr className="my-4"/>
                        <p className="lead">
                            <a className="btn palette-bg-secondary btn-lg" href="/create-article" role="button">Create Article</a>
                        </p>
                </div>
                <div className="container">
                    <div className="row">
                        {loading || articles.length === 0? "Loading...":<PostGrid articles={articles}/>}
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-4">
                            <h3>Top Rated Hotels</h3>
                            <ul className="list-group">
                                <li className="list-group-item"><a href="#">Camden Inn</a></li>
                                <li className="list-group-item"><a href="#">The Federal</a></li>
                                <li className="list-group-item"><a href="#">The Portland Regency</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
      );
}

export default HomeComponent