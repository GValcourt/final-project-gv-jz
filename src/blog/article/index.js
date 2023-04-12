//takes in an article and renders it with a map
import { useParams } from "react-router"
import {useDispatch } from "react-redux"
import {findArticleByAidThunk } from "../../services/article-thunks"
import { useEffect, useState } from "react"
import ArticleSection from "./article-section"

//TODO: add a comments footer that requires logged in state

const ArticleComponent = ()=>{

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
            <ArticleSection article={article}/>

      </div>
      );
}

export default ArticleComponent