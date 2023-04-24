import React, { useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import PostGrid from "./blog-post-grid";
import {findArticlesThunk} from "../../services/article-thunks.js";
import YourArticles from "./your-articles";
import SuggestedContentComponent from "../suggested-content-pane";

function HomeComponent(){
    const currentAuth = useSelector(state => state.auth);
    // console.log("Current: ", currentAuth.currentUser);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findArticlesThunk())
    },[dispatch]);
    let articles = useSelector(state => state.articles);
    //console.log(articles)
    let loading = useSelector(state => state.loading);
    if( currentAuth.currentUser === null){
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
                        {loading || articles.length === 0? "Loading...": <PostGrid articles={articles}/>}
                    </div>
                    {/*<div className="row mt-3">*/}
                    {/*    <div className="col-sm-4">*/}
                    {/*        <h3>Top Rated Hotels</h3>*/}
                    {/*        <ul className="list-group">*/}
                    {/*            <li className="list-group-item"><a href="https://camdenharbourinn.com/">Camden Inn</a></li>*/}
                    {/*            <li className="list-group-item"><a href="https://www.thefederalmaine.com/">The Federal</a></li>*/}
                    {/*            <li className="list-group-item"><a href="https://www.theregency.com/">The Portland Regency</a></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        );
    }
    else{
        if(currentAuth.user_type === "business"){
            return(
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
                        {/*<div className="row mt-3">*/}
                        {/*    <div className="col-sm-4">*/}
                        {/*        <h3>Top Rated Hotels</h3>*/}
                        {/*        <ul className="list-group">*/}
                        {/*            <li className="list-group-item"><a href="https://camdenharbourinn.com/">Camden Inn</a></li>*/}
                        {/*            <li className="list-group-item"><a href="https://www.thefederalmaine.com/">The Federal</a></li>*/}
                        {/*            <li className="list-group-item"><a href="https://www.theregency.com/">The Portland Regency</a></li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>
            );
        }
        else{
            return(
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
                        <YourArticles/>
                        <div className="mt-5">
                            <h4 className="display-4 font-36">Latest Articles</h4>
                            {loading || articles.length === 0? "Loading...":<PostGrid articles={articles}/>}
                        </div>
                        {/*<div className="col d-none d-md-block">*/}
                        {/*    <SuggestedContentComponent/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            )
        }
    }
}

export default HomeComponent