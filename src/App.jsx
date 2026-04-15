import './App.css'

import Navbar from "../../New folder/src/components/Navbar";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";


function App() {
  return (

    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend/:id" element={<FriendDetails />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
        <Footer />

      </div>

    </HashRouter>
  );
}

export default App;