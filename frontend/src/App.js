import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
     <div className="app">
      <Navbar/>
      <div className='app-pages'>
      <MainPage/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
