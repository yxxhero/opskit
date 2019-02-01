import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './container/searchpage/searchpage'
import LoginPage from './container/login/login'
import RegisterPage from './container/register/register'
import { WebPage } from './container/web/web'
import { EssayCreatePage } from './container/essay/essaycreate'
import { VideoPage } from './container/video/video'
import { VideoPlayPage } from './container/videoplay/videoplay'
import { isLogin } from './util/util'

class App extends Component {
  render() {
    return (
	<BrowserRouter>
           <Switch> 
             <Route path="/login/" exact component={LoginPage}></Route>
             <Route path="/register/" exact component={RegisterPage}></Route>
             <Route path="/video/"  exact render={() => isLogin(<VideoPage />)}></Route>
             <Route path="/videoplay/" exact render={() => isLogin(<VideoPlayPage />)}></Route>
             <Route path="/web/" exact component={WebPage}></Route>
             <Route path="/database/" exact component={WebPage}></Route>
             <Route path="/docker/" exact component={WebPage}></Route>
             <Route path="/security/" exact component={WebPage}></Route>
             <Route path="/essay/add" exact component={EssayCreatePage}></Route>
             <Route path="/index/" exact component={SearchPage}></Route>
             <Route component={SearchPage}></Route>
           </Switch>
	</BrowserRouter>
    );
  }
}

export default App;
