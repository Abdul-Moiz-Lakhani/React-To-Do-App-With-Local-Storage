import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ShowDate from './components/ShowDate';

import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import SignInPage from './components/SignInPage';
import AddWorkDiv from './components/AddWorkDiv';

class App extends Component {  

  render() {
    return (
      <div className="App">

        <div id="upper_line"></div>
        
        <div id="header">
            <div id="opacBox">
                <h1>To do App</h1>
            </div>
        </div>

        <div id="nav_bar">
          <ShowDate />
        </div>

        <div id="line"></div>

        <div id="screen">

            <div id="opacBox2">

              <div id="renderPage">

                <Router>
                  <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/home" component={AddWorkDiv} />
                  </div>
                </Router>
 
              </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;