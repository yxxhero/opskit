import React, { Component } from 'react';
import Loadable from "@/component/loadable";
import { isLogin } from './util/util'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EssayEditPage from './container/essay/essayedit';
import EssayCreatePage from './container/essay/essaycreate';
import ArticleViewPage from './container/essay/articleview'

const WebPage  = Loadable({
    loader: () => import('./container/web/web'),
});

const DockerPage  = Loadable({
    loader: () => import('./container/docker/docker'),
});

const HadoopPage  = Loadable({
    loader: () => import('./container/hadoop/hadoop'),
});

const DatabasePage  = Loadable({
    loader: () => import('./container/database/database'),
});

const SecurityPage  = Loadable({
    loader: () => import('./container/security/security'),
});


const VideoPage = Loadable({
    loader: () => import('./container/video/video'),

});

const VideoPlayPage = Loadable({
    loader: () => import('./container/videoplay/videoplay'),

});

const AccountCenter = Loadable({
    loader: () => import('./container/account/center'),

});

const AccountSettingBase = Loadable({
    loader: () => import('./container/account/baseinfo'),

});

const AdminUserPage = Loadable({
    loader: () => import('./container/admin/user'),

});

const AdminNotePage = Loadable({
    loader: () => import('./container/admin/essay'),

});

const AdminCommentPage = Loadable({
    loader: () => import('./container/admin/comment'),

});

const SearchPage = Loadable({
    loader: () => import('./container/searchpage/searchpage'),

});

const LoginPage = Loadable({
    loader: () => import('./container/login/login'),

});

const RegisterPage = Loadable({
    loader: () => import('./container/register/register'),

});



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
