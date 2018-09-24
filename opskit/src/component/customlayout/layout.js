import React, { Component } from 'react';
import './layout.css';
import logo from '../../style/img/logo.png'
import { Layout } from 'antd';
import { TopTips } from '../../component/toptips/toptips'
import SideBar from '../../component/sidebar/sidebar'
import MenuList from '../../component/menu/menu'

const { Header, Footer, Content } = Layout;
class CustomLayout extends Component {

  render() {
    const { CustomContent } = this.props; 
    return (
     <Layout className="layout">
       <TopTips  />
       <Header>
         <div className="logo">
			<img src={logo} alt="" style={{width: 210}}/>
         </div>
			<MenuList />
			<SideBar />
       </Header>
       <Content style={{ padding: '0 50px' }}>
			    <div>
			       {CustomContent}
			    </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Ant Design ©2018 Created by Ant UED
       </Footer>
     </Layout>
    );
  }
}

export default CustomLayout;
