//takes in an article and renders it with a map
import { useParams } from "react-router"
import {useDispatch, useSelector } from "react-redux"
import {findArticleByAidThunk } from "../../services/article-thunks"
import { useEffect, useState } from "react"
import ArticleSection from "./article-section"


const ArticleComponent = ()=>{
    const currentUser = useSelector(state => state.auth);
    const aid = useParams().id
    const dispatch = useDispatch();
    const [article, setArticle] = useState({})
    async function getData(){
        await dispatch(findArticleByAidThunk(aid)).then(result => {setArticle(result.payload); //console.log(result.payload)
        });
    }
    useEffect(() => {
        getData();
        }, []);

    return (
        <div className="container">
            {
                article.private === true && (currentUser === undefined || currentUser === null)?
                <div>
                    <h1>{article.title}</h1>
                    <h2> You must be logged in to view this article</h2>
                </div>
                :
                <ArticleSection article={article}/>
            }

      </div>
      );
}

export default ArticleComponent