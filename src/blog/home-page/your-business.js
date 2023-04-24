import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {findArticlebyPredThunk} from "../../services/article-thunks";

function YourBusiness() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth);
    if(currentUser.business === null){
        return("No business listed");
    }
    const [articles, setArticles] = useState([])
    const handleArticles = (someResult) => {
        if(someResult.error){
            console.log("Error: ", someResult.error);
        }
        else{
            setArticles([someResult])
        }
    }
    async function getData () {
        await dispatch(findArticlebyPredThunk(['business', currentUser.business])).then(
            result => handleArticles(result));
    }
    useEffect(()=>{
        getData();
    })
    if(!articles){
        console.log("No articles");
    }
    return (
        <div className="mt-4">
            <h4 className="display-5 font-24">Articles About Your Business</h4>
            {articles.length === 0 ? (
                <h6 className="text-muted">There are no articles about this business yet.</h6>
            ) : (
                <div>
                    {articles.map(article => (
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

export default YourBusiness;