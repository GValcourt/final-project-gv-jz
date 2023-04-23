import React from "react";
import SuggestedContentItem from "./suggested-content-item";

const articleExample = {
    title: "Golden Getaway",
    preamble: "This is a preamble! Imagine this is an article reviewing a hotel.",
    url: "/articles/uniqueid",
    thumbnail: "./images/exampleThumbnail.png"
}

const articleExample2 = {
    title: "Morning in Paris",
    preamble: "Ceci est un préambule! Imaginez qu'il s'agisse d'un article faisant la critique d'un hôtel.",
    url: "/articles/morninginparis",
    thumbnail: "./images/exampleThumbnail2.png"
}

function SuggestedContentComponent(){
    return (
        <div className="col-8 mt-3 mb-3">
            <div className="card p-1">
                <div className="card-header p-1 border-0 bg-white palette-text-green">
                    <h6 className="display-6 align-text-center font-24">Suggested Reads</h6>
                </div>
                <div className="card-body">
                    <SuggestedContentItem article={articleExample}/>
                    <SuggestedContentItem article={articleExample2}/>
                    {/*<SuggestedContentItem/>*/}
                </div>
            </div>
        </div>
      );
}

export default SuggestedContentComponent
