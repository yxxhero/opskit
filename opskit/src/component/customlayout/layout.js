import React, { Component } from 'react';
import './layout.css';
import logo from '../../style/img/logo.png'
import { Layout, BackTop, Row, Col } from 'antd';
import { TopTips } from '../../component/toptips/toptips'
import SideBar from '../../component/sidebar/sidebar'
import MenuList from '../../component/menu/menu'

const { Header, Footer, Content } = Layout;
class CustomLayout extends Component {

  render() {
    const { CustomContent } = this.props; 
    return (
     <Layout>
       <TopTips  />
       <Header>
         <Row>
           <Col span={4}>
           <div className="logo">
		  	<img src={logo} alt="" style={{width: 210}}/>
           </div>
           </Col>
           <Col span={14}>
		  	  <MenuList />
            </Col>
           <Col span={6}>
		  	  <SideBar />
            </Col>
         </Row>
       </Header>
       <Content style={{ padding: '0 50px' }}>
			    <div style={{ minHeight: window.innerHeight - 68.8 * 3 +27.8 }}>
                    <BackTop />
			       {CustomContent}
			    </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Aiopsclub ©2019 Created by Ant Design 
       </Footer>
     </Layout>
    );
  }
}

export default CustomLayout;
