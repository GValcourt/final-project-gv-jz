import Blog from "./blog"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*"
                 element={<Blog/>}/>
          <Route index
                 element={<Blog/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;