import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import logo from './logo.png'
import { Form, Button, Layout, Menu } from 'antd';
import { TopTips } from './component/toptips/toptips'
import { SearchIndex } from './component/search/search'

const { Header, Footer, Content } = Layout;
const FormItem = Form.Item;
class App extends Component {
  render() {
    return (
     <Layout className="layout">
       <TopTips  />
       <Header>
         <div className="logo">
			<img src={logo} alt="" style={{width: 210}}/>
         </div>
         <Menu
           theme="dark"
           mode="horizontal"
           defaultSelectedKeys={["index"]}
           style={{ display: "inline-block", lineHeight: '64px' , marginLeft: '40px'}}
         >
           <Menu.Item key="index">首页</Menu.Item>
           <Menu.Item key="web">web服务</Menu.Item>
           <Menu.Item key="database">数据库</Menu.Item>
           <Menu.Item key="security">安全</Menu.Item>
         </Menu>
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
			<BrowserRouter>
			    <div>
			       <Switch> 
			           <Route component={SearchIndex}></Route>
			       </Switch>
			    </div>
			</BrowserRouter>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Ant Design ©2018 Created by Ant UED
       </Footer>
     </Layout>
    );
  }
}

export default App;
