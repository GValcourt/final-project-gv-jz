import React from "react";
import { getImageThunk } from "../../services/image-thunk";

function PostGrid( articles ) {
    //console.log(articles.articles.articles)

    let firstArticles = articles.articles.articles.slice(0,3)

    const gridItem = (article) => {

        return(
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="./images/gorges-grant-hotel.jpeg" alt="Gorges Grant Hotel"/>
                        <div className="card-body">
                            <h5 className="card-title">Blog Post</h5>
                            <p className="card-text">{article.title}</p>
                            <a href={`/article/${article._id}`} className="btn palette-bg-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            {firstArticles.map(gridItem)}
        </div>
    )

}

export default PostGrid;