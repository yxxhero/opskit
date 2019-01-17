import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './component/pages/searchpage/searchpage'
import LoginPage from './component/pages/login/login'
import RegisterPage from './component/pages/register/register'
import { WebPage } from './component/pages/web/web'
import { EssayPage } from './component/pages/essay/essay'
import { VideoPage } from './component/pages/video/video'
import { VideoPlayPage } from './component/pages/videplay/videoplay'
import { isLogin } from './util/util'

class App extends Component {
  render() {
    return (
	<BrowserRouter>
           <Switch> 
               <Route path="/login" exact component={LoginPage}></Route>
               <Route path="/register" exact component={RegisterPage}></Route>
               <Route path="/video"  exact render={() => isLogin(<VideoPage />)}></Route>
               <Route path="/videoplay" exact render={() => isLogin(<VideoPlayPage />)}></Route>
               <Route path="/web" exact component={WebPage}></Route>
               <Route path="/database" exact component={WebPage}></Route>
               <Route path="/docker" exact component={WebPage}></Route>
               <Route path="/security" exact component={WebPage}></Route>
               <Route path="/essay" exact component={EssayPage}></Route>
               <Route path="/index" exact component={SearchPage}></Route>
               <Route component={SearchPage}></Route>
           </Switch>
	</BrowserRouter>
    );
  }
}

export default App;
