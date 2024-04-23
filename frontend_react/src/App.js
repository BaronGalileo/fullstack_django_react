import './index.css';
import { Route, Routes } from "react-router-dom";
import Categorypage from "./pages/Categorypage"
import Home from "./pages/Homepage"
import Recipes from './pages/Recirespage';
import Layout from './components/Layout';
import Notfoundpage from './pages/Notfoundpage'
import Swagger from './pages/Swagger'




function App() {
  
  




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='cat/:name' element={<Categorypage />}/>
          <Route path="cat/:name/recipe/:id" element={<Recipes/>}/>
          <Route path='SwaggerUI' element={<Swagger/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
