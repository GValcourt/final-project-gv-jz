import Blog from "./blog"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileComponent from "./blog/profile/index";
import LoginComponent from "./blog/login-page/index";
import NavigationBar from "./blog/navigation-bar/index";
import AdminComponent from "./blog/admin/index";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/*"
             element={<Blog/>}/>
        <Route index
             element={<Blog/>}/>
        {/*<Route path="/login"*/}
        {/*     element={<LoginComponent/>} />*/}
        {/*<Route path="/profile"*/}
        {/*     element={<ProfileComponent/>} />*/}
        </Routes>
    </BrowserRouter>
  );
}
export default App;