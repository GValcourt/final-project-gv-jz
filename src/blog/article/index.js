//takes in an article and renders it with a map
import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { findArticlesThunk } from "../../services/article-thunks"
import { useEffect } from "react"
import ArticleSection from "./article-section"

//TODO: add a comments footer that requires logged in state

const ArticleComponent = ()=>{

    const aid = parseInt(useParams().id)
    //console.log(aid)
    //may find a better way to do this
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findArticlesThunk());}, [dispatch]);
    //console.log(useSelector(state => state.articles).articles.find((article) => article._postid === aid))
    const article = useSelector(state => state.articles).articles.find((article) => article._postid === aid)

    return (
        <div className="container">
            <ArticleSection article={article}/>
      </div>
      );
}

export default ArticleComponent