import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-pane"
import HomeComponent from "./home-page"
import ArticleComponent from "./article"
import ProfileComponent from "./profile"
import EditProfileComponent from "./edit-profile"
import SuggestedContentComponent from "./suggested-content-pane"
import CreateArticleComponent from "./create-article";

//main website functionality
function Blog() {
    return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <Routes>
            <Route path=""    element={<HomeComponent/>}/>
            <Route path="home"    element={<HomeComponent/>}/>
            <Route path="article/*"    element={<ArticleComponent/>}/>
            <Route path="profile" element={<ProfileComponent/>}/>
            <Route path="edit-profile" element={<EditProfileComponent/>}/>
            <Route path="create-article" element={<CreateArticleComponent/>}/>
          </Routes>
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <SuggestedContentComponent/>
        </div>
    </div>
    );
   }

export default Blog