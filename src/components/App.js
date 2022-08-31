import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;