import React from "react";
// import {Routes, Route} from "react-router";
// import { configureStore } from '@reduxjs/toolkit';
// import {Provider} from "react-redux";
import PostGrid from "./blog-post-grid";


//renders pretty stuff

function HomeComponent(){
    return (
        // <Provider store={store}>
            <div>
                <div className="row">
                    {/* Nav and search bar */}
                </div>
                <div className="container">
                    <div className="jumbotron">
                        <h1>Book It</h1>
                        <p>Hotel reviews for the modern nomad</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Read More</a>
                    </div>
                    <div className="row">
                        <PostGrid/>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Top Rated Hotels</h3>
                            <ul className="list-group">
                                <li className="list-group-item"><a href="#">Camden Inn</a></li>
                                <li className="list-group-item"><a href="#">The Federal</a></li>
                                <li className="list-group-item"><a href="#">The Portland Regency</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h3>Follow Me</h3>
                            <ul className="list-group">
                                <li className="list-group-item"><a href="#">Facebook</a></li>
                                <li className="list-group-item"><a href="#">Twitter</a></li>
                                <li className="list-group-item"><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        // </Provider>
      );
}

export default HomeComponent