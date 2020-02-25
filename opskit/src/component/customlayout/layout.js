import React, { Component } from 'react';
import './layout.css';
import logo from '../../style/img/logo.png'
import { Layout, BackTop, Row, Col } from 'antd';
import { TopTips } from '../../component/toptips/toptips'
import SideBar from '../../component/sidebar/sidebar'
import { withRouter } from 'react-router-dom'
import MenuList from '../../component/menu/menu'

const { Header, Footer, Content } = Layout;

@withRouter
class CustomLayout extends Component {

  componentDidMount(){
    sessionStorage.setItem('pre_url', this.props.location.pathname + this.props.location.search);
  }
  currentYear = () => {
    let current_datetime = new Date()
    return current_datetime.getFullYear()
  }

  render() {
    const { CustomContent } = this.props; 
    return (
     <Layout>
       <TopTips  />
       <Header>
         <Row>
           <Col span={3}>
           <div className="logo">
		  	<img src={logo} alt="" style={{width: 150}}/>
           </div>
           </Col>
           <Col span={15}>
		  	  <MenuList />
            </Col>
           <Col span={6}>
		  	  <SideBar />
            </Col>
         </Row>
       </Header>
       <Content style={{ padding: '0 50px' }}>
			    <div style={{ minHeight: window.innerHeight - 68.8 * 3 + 50 }}>
                    <BackTop />
			       {CustomContent}
			    </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Aiopsclub ©{this.currentYear()} Created by Ant Design 版权所有 ICP证:<a href="http://www.beian.miit.gov.cn/">京ICP备19013304号-1</a> 
       </Footer>
     </Layout>
    );
  }
}

export default CustomLayout;
