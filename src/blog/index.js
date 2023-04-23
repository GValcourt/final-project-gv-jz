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
// import profileReducer from "./reducers/profile-reducer"
import authReducer from "./reducers/auth-reducer.js"
import LocationComponent from "./location";
import {Provider} from "react-redux";
import { configureStore }
  from '@reduxjs/toolkit';
import LoginComponent from "./login-page";
import CurrentUserContext from "./current-user-context";
const store = configureStore(
  {reducer: {articles: articleReducer, auth: authReducer}});

function Blog() {
  return (
      <Provider store={store}>
        <CurrentUserContext>
          <NavigationBar/>
          <div className="d-flex">
            <div className="row mt-2">
              <div className="col-9"
                   style={{"position": "relative"}}>
              {/*<div className="col-10 col-md-10 col-lg-10 col-xl-6"*/}
              {/*     style={{"position": "relative"}}>*/}
                <Routes>
                  <Route path="/*" element={<HomeComponent/>}/>
                  <Route path="home" element={<HomeComponent/>}/>
                  <Route path="article/:id" element={<ArticleComponent/>}/>
                  <Route path="profile" element={<ProfileComponent/>}/>
                  <Route path="profile/:uid" element={<ProfileComponent/>}/>
                  <Route path="edit-profile" element={<EditProfileComponent/>}/>
                  <Route path="create-article" element={<CreateArticleComponent/>}/>
                  <Route path="search" element={<SearchComponent/>}/>
                  <Route path="search/locations/:params" element={<SearchComponent/>}/>
                  <Route path="search/users/:params" element={<SearchComponent/>}/>
                  <Route path="location/:params" element={<LocationComponent/>}/>
                  <Route path="login" element={<LoginComponent/>}/>
                </Routes>
              </div>
              {/*<div className="col-1"/>*/}
              <div className="col-3">
                <SuggestedContentComponent/>
              </div>
            </div>
          </div>
        </CurrentUserContext>
    </Provider>
    );
   }

export default Blog