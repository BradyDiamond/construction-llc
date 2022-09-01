import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './Gallery/Gallery';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToTop from './ScrollToTop';

function App() {



  return (
    <div className="App">
      <Router>     
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/gallery' exact element={<Gallery />} />
        </Routes>
        <Footer />
      </Router> 

    </div>
  );
}

export default App;