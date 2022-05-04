import React from 'react'; 
import ReactDOM from 'react-dom';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

import './styles/index.css';

import App from './pages/App';
import Categories from './components/Categories';
import StartPlanning from './components/StartPlanning';
import Results from './components/Results';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/startplanning" element={<StartPlanning />} />
      <Route path="/results" element={<Results />} />
      {/* <Route path="/itinerary" element={} /> */}

      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
