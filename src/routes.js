import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Navbar } from './components/Navbar';
import { Route, Navigate, Routes } from 'react-router-dom';

export const Rout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
         <Route path="*" element={<Navigate to ="/" />}/>
        </Route>
        <Route exact path="/About" component={About} />
      </Routes>
    </div>
  );
};