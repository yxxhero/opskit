import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './component/pages/searchpage/searchpage'
import LoginPage from './component/pages/login/login'

class App extends Component {
  render() {
    return (
	<BrowserRouter>
        <div className="content">
           <Switch> 
               <Route path="/login" component={LoginPage}></Route>
               <Route path="/index" component={SearchPage}></Route>
               <Route component={SearchPage}></Route>
           </Switch>
        </div>
	</BrowserRouter>
    );
  }
}

export default App;
