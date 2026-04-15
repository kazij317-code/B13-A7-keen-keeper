import './App.css'

import Navbar from "../../New folder/src/components/Navbar";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
  
    <HashRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
        
      </div>

    </HashRouter>
  );
}

export default App;