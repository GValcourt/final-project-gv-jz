import Blog from "./blog"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/index.css'



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