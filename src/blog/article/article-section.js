//takes in an article and renders it with a map
import { Link } from "react-router-dom"
import {useDispatch } from "react-redux"
import { getImageThunk } from "../../services/image-thunk";
import { getUsersByPredThunk } from "../../services/user-thunks";
import { useEffect, useState } from 'react';


//TODO: add a comments footer that requires logged in state

const ArticleSection = ({article={
    "_posterID": "12345",
      "_postid": "12345",
      "title": "My Galvant Around New York",
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta urna sed ante molestie elementum id a mauris.\
      Aenean consequat malesuada pharetra. Nunc at metus lectus. Fusce ultrices orci eu libero bibendum, eget auctor sem eleifend.\
      Duis lobortis, ipsum vel pulvinar ullamcorper, nunc enim lacinia nulla, aliquam euismod sem nunc nec ante. Aliquam dapibus \
      lectus sed lectus sollicitudin, vel ornare elit malesuada. Curabitur sed urna a tellus tincidunt iaculis id eu diam. Nam felis \
      odio, pharetra id est ultrices, suscipit auctor mi. Nulla ut mattis nisl. Donec ut tristique mi. Vivamus a commodo risus. Nulla \
      facilisi. In eleifend a magna nec aliquam. Phasellus ante felis, tempor eget arcu et, lacinia venenatis ante. Morbi sed metus \
      feugiat, blandit quam in, mollis quam.\nPraesent porta, nisi eget placerat faucibus, nulla augue ullamcorper quam, vel finibus\
      metus arcu luctus metus. Aenean dictum lectus pretium est congue, id ullamcorper ligula feugiat. Donec vitae egestas nisi, vel\
      bibendum enim. Proin eu libero eleifend, pharetra ligula sit amet, hendrerit felis. In convallis vehicula elit, vitae aliquet\
      neque tempus in. Nam tincidunt, est pellentesque semper auctor, metus urna fringilla ipsum, at gravida metus nulla non risus.\
      Nam a dui at arcu condimentum vulputate ac vitae lectus. Mauris ac viverra diam. Etiam nec volutpat purus. Nam ante velit,\
      venenatis sit amet dictum vitae, tempor ut nibh. Praesent viverra purus in fermentum sollicitudin.\nVestibulum cursus mi sapien,\
      sed suscipit justo facilisis a. Aliquam in lacus posuere, condimentum metus a, viverra ligula. Maecenas vel nisi a leo vulputate\
      dignissim in rutrum diam. Phasellus consectetur eros et metus feugiat, ac sodales eros aliquet. Quisque porta facilisis libero\
      vel lobortis. Mauris volutpat urna ligula, mollis rhoncus massa ultrices non. Morbi in malesuada orci. Aenean a tristique mi,\
      sit amet rutrum nisl. Aenean lobortis ipsum sit amet turpis tempus, ac condimentum ante porttitor.\nIn hac habitasse platea\
      dictumst. Phasellus egestas dolor aliquet augue cursus malesuada nec quis augue. Fusce a cursus risus, vel ultrices augue.\
      Donec eget molestie nisi, et lobortis tortor. Fusce nec leo commodo, ultricies dui sit amet, iaculis mauris. Etiam mollis\
      mattis lectus quis aliquet. Sed pharetra condimentum orci quis posuere. Suspendisse potenti. Fusce euismod diam ut elementum\
      maximus. Morbi eu mauris at ipsum volutpat tristique eu sit amet risus. Vivamus mi massa, consectetur quis porttitor non,\
      blandit elementum tortor. In hac habitasse platea dictumst. Quisque odio diam, dapibus at massa nec, fermentum efficitur mi.\n\
      Pellentesque in urna ex. Donec nec feugiat mi, aliquam eleifend neque. Nam sit amet mattis eros. Maecenas eget pulvinar lectus.\
      Vivamus eleifend porta augue, at venenatis ipsum dignissim nec. Phasellus nunc ipsum, feugiat id turpis eget, sollicitudin\
      vulputate ipsum. Integer suscipit ac eros consequat elementum. In gravida interdum magna, eget molestie nulla suscipit sed.\
      Etiam maximus odio et metus scelerisque porta. Vestibulum ornare ante mauris, et maximus tortor placerat sed. Curabitur\
      consequat dictum ligula eu iaculis.",
      "images":["roux_institute.jpg"],
      "location":[{
        locationName: "The Roux Institute at Northeastern University, Fore Street, Portland, ME, USA",
        placeID: "ChIJcUVoBcmdskwRwMf9m2cqlmo" 
        }]
}})=>{
    const [author, setAuthor] = useState({});
    const dispatch = useDispatch();
    async function getData () {
        if ((article._posterID !== "12345" && article._posterID !== undefined) && (isEmpty(author))){
            await dispatch(getUsersByPredThunk(['_id', article._posterID])).then(result => {setAuthor(result.payload[0])});
        }
    };
    useEffect(()=>{
        getData();
    })

    async function getTestImage() {
        let testImage = await dispatch(getImageThunk(article.images[0]));
        const url = testImage.payload
        //console.log(url)
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
        
    }
    function isEmpty(obj) {
        //helper function to check if article is empty
        return Object.keys(obj).length === 0;
    }
    //console.log(isEmpty(article))
    function createParagraphs(article){
        let renderArray = [];
        if (!isEmpty(article)){

            const textArray = article.text.split('\n')
            //console.log(textArray)
            
            renderArray = textArray.map(words => {
                return(
                    <p key={textArray.indexOf(words)}>
                    {words}
                </p>
            )
        } )
        //Store images in Firebase
        if (article.images.length > 0){
            const ImageItem = (image) =>{return(
                <img id='myimg' key={image} src={'temp'} alt={`${image} placeholder`}></img>
                )}
                
                renderArray.splice(2,0, ImageItem(article.images[0])) //Randomly drop images between paragraphs?
                getTestImage()
            }
        }
        //console.log(renderArray)
        return renderArray;
    }
    let renderArray = createParagraphs(article)
    return (
        <div className="container">
            {!isEmpty(article)?<div>
                <h1 className="display-5">
                    {article.title}
                </h1>
                <h4 className="text-muted">
                    By {<Link to={`/profile/${author._id}`}>{author.first_name + " " +author.last_name}</Link>} 
                    {author.user_type === "business"? <h6>Corporate Partner</h6>: ""}
                </h4>
                <h6 className="text-info">
                    Posted: {article.date}
                </h6>
                <h6>
                    Places referenced:
                    <ul>
                        {article.location.map(places => <li key={places.placeID}>
                                <Link to={`/location/${places.placeID}`}>{places.locationName}</Link></li>)}
                    </ul>
                </h6>
                <div className="row">
                {
                    renderArray
                }
                </div>
                </div>
            :
            "Loading"}
      </div>
      );
}

export default ArticleSection