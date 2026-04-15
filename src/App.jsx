import './App.css'

import Navbar from "../../New folder/src/components/Navbar";
import { HashRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
  
    <HashRouter>
      <div>
        <Navbar/>
        <Footer/>
      </div>

    </HashRouter>
  );
}

export default App;