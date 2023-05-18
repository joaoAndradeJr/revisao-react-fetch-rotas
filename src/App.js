import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './pages/Menu';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import CharacterDetails from './components/CharacterDetails';
import './App.css';


class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route path="/menu" component={ Menu } />
        <Route exact path="/" component={ Login } />
        <Route path="/character/:id" component={ CharacterDetails } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
