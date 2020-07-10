import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.jsx';
import Categories from './Categories.jsx';
import BlogPage from './BlogPage.jsx';
function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/Categories"} component={Categories} />
        <Route path={"/Science"} component={BlogPage} />
        <Route path={"/Travel"} component={BlogPage} />
        <Route path={"/Food"} component={BlogPage} />
        <Route path={"/Tech"} component={BlogPage} />
        <Route path={"/Fitness"} component={BlogPage} />
        <Route path={"/Music"} component={BlogPage} />
      </Switch>
    </Router>
  );
}
export default App;
