import Blog from "./blog"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import CurrentUserContext from "./blog/current-user-context";
import ProfileComponent from "./blog/profile/index";
import LoginComponent from "./blog/login-page/index";
import NavigationBar from "./blog/navigation-bar/index";
import AdminComponent from "./blog/admin/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import articleReducer from "./blog/reducers/article-reducer";
import authReducer from "./blog/reducers/auth-reducer";


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/*"
                       element={<Blog/>}/>
                <Route index
                       element={<Blog/>}/>
            </Routes>
    </BrowserRouter>
  );
}
export default App;