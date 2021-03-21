import React from 'react';
import "../src/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Home from "./components/Pages/Home"
import Posts from './components/Pages/Post';
import Services from './components/Pages/Services';
import Sign from './components/Pages/Sign';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/sign-up" component={Sign}></Route>
        </Switch>
      </Router>

    </React.Fragment>

  )


}


export default App;