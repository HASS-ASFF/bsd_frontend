import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Login from './components/store/Auth/Login';
import Register from './components/store/Auth/Register';

import Home from './components/store/Home';
import Main from './layouts/admin/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          
          <Route path="/admin" name="Admin" render={(props)=> <Main {...props} />}  />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
