import React from 'react'
import Header from './Header/Header';
import SocialHeader from './SocialHeader/SocialHeader';
import Test from './FakeBodyForTest';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <SocialHeader />
      <Header />
      <div className='body'>
        <h1>body</h1>
        <Test />
        <Test />
        <Test />
        <Test />
      </div>
      <div className='footer'>
        <h1>footer</h1>  
      </div>
    </div>
  );
}

export default App;
