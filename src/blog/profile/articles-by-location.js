import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {findArticlebyPredThunk} from "../../services/article-thunks";

function ArticlesByLocation({locationID}) {
    const placeID = locationID;
    const [articles, setArticles] = useState([])
    const handleArticles = (someResult) => {
        if(someResult.error){
            console.log("Error: ", someResult.error);
        }
        else{
            console.log(someResult)
            setArticles(someResult.payload)
        }
    }
    async function getData () {
        await dispatch(findArticlebyPredThunk([location, placeID])).then(
            result => handleArticles(result));
    }
    useEffect(()=>{
        getData();
    },[])
    if(!articles){
        console.log("No articles");
    }
    console.log(articles);
    return (
        <div className="mt-4">
            <h4 className="display-5 font-24">Your Liked Places</h4>
            {articles.length === 0 ? (
                <h6 className="text-muted">No articles about this location.</h6>
            ) : (
                <div>
                    {articles.map(location => (
                        <Card key={article.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.summary}</Card.Text>
                                <Link to={`/articles/${article.id}`}>
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ArticlesByLocation;