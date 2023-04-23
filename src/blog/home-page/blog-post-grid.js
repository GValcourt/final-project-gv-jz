import React, {useEffect, useState} from "react";
import { getImageThunk } from "../../services/image-thunk";
import { useDispatch } from "react-redux";

function PostGrid( articles ) {
    //console.log(articles.articles.articles)
    const dispatch = useDispatch()
    const [images, setImage] = useState(['../../images/gorges-grant-hotel.jpeg', '../../images/gorges-grant-hotel.jpeg', '../../images/gorges-grant-hotel.jpeg'])
    let firstArticles = articles.articles.articles.slice(-4,-1)
    useEffect(() => {
        for (let i = 0; i < firstArticles.length; i++) {
            if(firstArticles[i].images[0] !== undefined && firstArticles[i].images[0] !== null
                && firstArticles[i].images[0] !== ''){
                //console.log(firstArticles[i].images[0])
                dispatch(getImageThunk(firstArticles[i].images[0])).then(res => {images.splice(i,1,res.payload)})
            }
        }},[articles])

    const gridItem = (article, index) => {
    

        return(
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={images[index]} alt="Gorges Grant Hotel"/>
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
            {firstArticles.map((currentElement, index) => gridItem(currentElement, index))}
        </div>
    )

}

export default PostGrid;