import {Routes, Route} from "react-router";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home-page"
import ArticleComponent from "./article"
import ProfileComponent from "./profile"
import EditProfileComponent from "./edit-profile"
import CreateArticleComponent from "./create-article";
import SearchComponent from "./search/index.js";
import AdminComponent from "./admin";
import articleReducer from "./reducers/article-reducer.js"
import authReducer from "./reducers/auth-reducer.js"
import LocationComponent from "./location";
import {Provider} from "react-redux";
import { configureStore }
  from '@reduxjs/toolkit';
import LoginComponent from "./login-page";
import CurrentUserContext from "./current-user-context";
import RegisterComponent from "./register";
import UserManagement from "./admin/user-management";
const store = configureStore(
  {reducer: {articles: articleReducer, auth: authReducer}});

function Blog() {
  return (
      <Provider store={store}>
        <CurrentUserContext>
          <NavigationBar/>
          <div className="container-fluid">
            {/*<div className="row mt-2">*/}
            {/*  <div className="col bg-info"*/}
            {/*       style={{"position": "relative"}}>*/}
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
                  <Route path="register" element={<RegisterComponent/>}/>
                  <Route path="admin" element = {<AdminComponent/>}/>
                  <Route path="user-management" element={<UserManagement/>}/>
                </Routes>
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </CurrentUserContext>
    </Provider>
    );
   }

export default Blog