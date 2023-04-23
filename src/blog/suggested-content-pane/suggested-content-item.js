import React from "react"

const SuggestedContentItem = ({ article }) => {
    return(
        <div className="row mb-3">
            <div className="col">
                <img src={article.thumbnail} className="rounded img-fluid mb-2"
                         alt="image-thumbnail"/>
                <div className="mt-2">
                    <h5 className="mb-1 font-normal">{article.title}</h5>
                    <p className="lead font-16">{article.preamble}</p>
                    <a href={article.url} className="btn palette-bg-secondary align-self-center">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default SuggestedContentItem;