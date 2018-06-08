import React, { Component } from 'react';
import './App.css';
import Header from "./shared/components/header";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Landing from "./landing/containers/landing";
import Footer from "./shared/components/footer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <div>
                    <Route exact path="/" component={Landing}/>
                </div>
            </Router>
            <Footer/>
        </div>

    );
  }
}

export default App;
