import './App.css'

import Navbar from "../../New folder/src/components/Navbar";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
  
    <HashRouter>
      <div>
        <Navbar/>
      </div>
    </HashRouter>
  );
}

export default App;