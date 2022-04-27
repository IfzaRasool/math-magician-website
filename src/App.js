/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quotes from './components/quotes';
import Header from './components/header';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/quote" element={<Quotes />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
