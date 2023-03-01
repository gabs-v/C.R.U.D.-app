import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Registration from './components/Registration';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Registration/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
