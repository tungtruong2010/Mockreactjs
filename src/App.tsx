import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Table from './components/Table';
import {BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
      path='*'
        element={<Navigate to="/respo1" replace />}
      />
        {/* <Route path='/home' element = {<Home/>}></Route> */}
        <Route path='/respo1' element={<Home />} />
        <Route path='/respo2' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
