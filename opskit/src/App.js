import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SearchPage } from './container/searchpage/searchpage'
import LoginPage from './container/login/login'
import RegisterPage from './container/register/register'
import { WebPage } from './container/web/web'
import { DockerPage } from './container/docker/docker'
import { HadoopPage } from './container/hadoop/hadoop'
import { DatabasePage } from './container/database/database'
import { SecurityPage } from './container/security/security'
import { EssayCreatePage } from './container/essay/essaycreate'
import { EssayEditPage } from './container/essay/essayedit'
import { ArticleViewPage } from './container/essay/articleview'
import { VideoPage } from './container/video/video'
import { VideoPlayPage } from './container/videoplay/videoplay'
import { AccountCenter } from './container/account/center'
import { AccountSettingBase } from './container/account/baseinfo'
import { AdminUserPage } from './container/admin/user'
import { AdminNotePage } from './container/admin/essay'
import { AdminCommentPage } from './container/admin/comment'
import { isLogin } from './util/util'


class App extends Component {
  render() {
    return (
	<BrowserRouter>
           <Switch> 
             <Route path="/login/" exact component={LoginPage}></Route>
             <Route path="/admin/user/" exact component={AdminUserPage}></Route>
             <Route path="/admin/essay/" exact component={AdminNotePage}></Route>
             <Route path="/admin/comment/" exact component={AdminCommentPage}></Route>
             <Route path="/register/" exact component={RegisterPage}></Route>
             <Route path="/video/"  exact render={() => isLogin(<VideoPage />)}></Route>
             <Route path="/video/play/" exact render={() => isLogin(<VideoPlayPage />, this)}></Route>
             <Route path="/web/" exact component={WebPage}></Route>
             <Route path="/database/" exact component={DatabasePage}></Route>
             <Route path="/docker/" exact component={DockerPage}></Route>
             <Route path="/security/" exact component={SecurityPage}></Route>
             <Route path="/hadoop/" exact component={HadoopPage}></Route>
             <Route path="/essay/add/" exact render={() => isLogin(<EssayCreatePage />)}></Route>
             <Route path="/essay/view/" exact component={ArticleViewPage}></Route>
             <Route path="/essay/edit/" exact component={EssayEditPage}></Route>
             <Route path="/account/center/" exact component={AccountCenter}></Route>
             <Route path="/account/setting/base/" exact component={AccountSettingBase}></Route>
             <Route path="/index/" exact component={SearchPage}></Route>
             <Route component={SearchPage}></Route>
           </Switch>
	</BrowserRouter>
    );
  }
}

export default App;
