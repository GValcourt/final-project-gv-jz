import {Routes, Route} from "react-router";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home-page"
import ArticleComponent from "./article"
import ProfileComponent from "./profile"
import EditProfileComponent from "./edit-profile"
import SuggestedContentComponent from "./suggested-content-pane"
import CreateArticleComponent from "./create-article";
import SearchComponent from "./search/index.js";
import articleReducer from "./reducers/article-reducer.js"
import profileReducer from "./reducers/profileReducer"
import LocationComponent from "./location";
import {Provider} from "react-redux";
import { configureStore }
  from '@reduxjs/toolkit';
const store = configureStore(
  {reducer: {articles: articleReducer, profile: profileReducer}});

function Blog() {
  return (
      <Provider store={store}>
          <NavigationBar/>
        <div className="container">
          <div className="row mt-2">
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
              <Routes>
                <Route path="" element={<HomeComponent/>}/>
                <Route path="home" element={<HomeComponent/>}/>
                <Route path="article/:id" element={<ArticleComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="edit-profile" element={<EditProfileComponent/>}/>
                <Route path="create-article" element={<CreateArticleComponent/>}/>
                <Route path="search" element={<SearchComponent/>}/>
                <Route path="search/locations/:params" element={<SearchComponent/>}/>
                <Route path="search/users/:params" element={<SearchComponent/>}/>
                <Route path="location/:params" element={<LocationComponent/>}/>
              </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
              <SuggestedContentComponent/>
            </div>
          </div>
        </div>
    </Provider>
    );
   }

export default Blog