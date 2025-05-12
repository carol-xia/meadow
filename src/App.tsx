import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
