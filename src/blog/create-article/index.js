import MapContainer from "../google-map"
import { Loader } from "@googlemaps/js-api-loader";


const CreateArticleComponent = ()=>{
    return (
        <div className="container">
            createcomponent
            <form>
            <input defaultValue={"title of article"}>
            </input><br></br>
            <input defaultValue={"articletext"}>
            </input><br></br>
            image uploads<br></br>
            <input id="locationstring" defaultValue={"title of article"}>
            </input>
            </form>
      </div>
      );
}

export default CreateArticleComponent