import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {findArticlebyPredThunk} from "../../services/article-thunks";

function YourArticles() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth);
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
        await dispatch(findArticlebyPredThunk(['_posterID', currentUser.currentUser._id])).then(
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
            <h4 className="display-4 font-36">Your Articles</h4>
            {articles.length === 0 ? (
                <h6 className="text-muted">You haven't written any articles yet.</h6>
            ) : (
                <div>
                    {articles.map(article => (
                        <Card key={article.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.summary}</Card.Text>
                                <Link to={`/article/${article._id}`}>
                                    <Button variant="info" classname="palette-btn-bg">Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default YourArticles;