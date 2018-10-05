import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './component/pages/searchpage/searchpage'
import LoginPage from './component/pages/login/login'
import RegisterPage from './component/pages/register/register'
import { WebPage } from './component/pages/web/web'

class App extends Component {
  render() {
    return (
	<BrowserRouter>
           <Switch> 
               <Route path="/login" component={LoginPage}></Route>
               <Route path="/register" component={RegisterPage}></Route>
               <Route path="/web" component={WebPage}></Route>
               <Route path="/database" component={WebPage}></Route>
               <Route path="/docker" component={WebPage}></Route>
               <Route path="/security" component={WebPage}></Route>
               <Route path="/index" component={SearchPage}></Route>
               <Route component={SearchPage}></Route>
           </Switch>
	</BrowserRouter>
    );
  }
}

export default App;
