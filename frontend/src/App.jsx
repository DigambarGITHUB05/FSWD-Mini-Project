import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LostItems from './pages/LostItems';
import FoundItems from './pages/FoundItems';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import LoginSignup from './pages/LoginSignup';
import { ItemProvider } from './services/ItemContext';

function App() {
  return (
    <ItemProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lost" element={<LostItems />} />
              <Route path="/found" element={<FoundItems />} />
              <Route path="/add-item" element={<AddItem />} />
              <Route path="/item/:id" element={<ItemDetails />} />
              <Route path="/auth" element={<LoginSignup />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
