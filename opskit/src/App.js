import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import logo from './logo.png'
import { Form, Button, Layout } from 'antd';
import { TopTips } from './component/toptips/toptips'
import { SearchIndex } from './component/search/search'
import MenuList from './component/menu/menu'

const { Header, Footer, Content } = Layout;
const FormItem = Form.Item;
class App extends Component {
  render() {
    return (
	<BrowserRouter>
     <Layout className="layout">
       <TopTips  />
       <Header>
         <div className="logo">
			<img src={logo} alt="" style={{width: 210}}/>
         </div>
			<MenuList />
			 <Form layout="inline" style={{margin: "12px auto", float: "right"}}>
        		<FormItem style={{marginLeft: 16, marginRight: 0}}>
        		  <Button
        		    type="primary"
        		  >
					注册
        		  </Button>
        		</FormItem>  
        		<FormItem style={{marginLeft: 16, marginRight: 0}}>
        		  <Button
        		    type="primary"
        		  >
					登录
        		  </Button>
        		</FormItem>  
			 </Form>
       </Header>
       <Content style={{ padding: '0 50px' }}>
			    <div>
			       <Switch> 
			           <Route path="/index" component={SearchIndex}></Route>
			           <Route component={SearchIndex}></Route>
			       </Switch>
			    </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Ant Design ©2018 Created by Ant UED
       </Footer>
     </Layout>
	</BrowserRouter>
    );
  }
}

export default App;
