import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import NoMatch from './components/NoMatch';
import { Segment } from 'semantic-ui-react';




const App = () => (
  <Segment basic>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/menu/:id' component={MenuItem} />
      <Route component={NoMatch} />
    </Switch>
  </Segment>
);

export default App;
