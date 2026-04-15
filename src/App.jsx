import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import './App.css'
import Footer from "./components/Footer";


function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <div className="min-h-screen bg-[#E9E9E9] font-sans text-gray-900">
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend/:id" element={<FriendDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-emerald-900">404</h1>
            <p className="text-xl text-gray-500 mt-4">Oops! This page doesn't exist.</p>
          </div>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;