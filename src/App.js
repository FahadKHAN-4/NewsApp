import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<News category="general" country="us"/>} />
            <Route path="/buisness" element={<News category="buisness" country="us" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;