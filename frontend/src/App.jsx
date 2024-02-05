import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NOTfound from "./Pages/NOTfound";
import Success from "./Pages/Success";


const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Success" element={<Success/>}/>
      <Route path="*" element={<NOTfound/>}/>
    </Routes>
    <Toaster/>
  </Router>
    
  
};

export default App;



