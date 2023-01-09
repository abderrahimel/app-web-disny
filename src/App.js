import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { auth, db } from './firebase';
import Detail from './components/Detail';
import Viewers from './components/Viewers';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';


  function App() {
   
  return (
  
    <div className="App">
         <Router>
          <Header/>
          <Switch>
            {/* here we have the id of the movie param */}
            <Route  exact path="/detail/:id">
                   <Detail/>
            </Route>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
 }
export default App;

