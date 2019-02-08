import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { logout } from '../../redux/user.redux'
import { Menu, Form, Button, Dropdown, Icon } from "antd"
import { withRouter } from 'react-router-dom'
import { checkSession } from '../../util/util'

const FormItem = Form.Item;


@withRouter
@connect(
  state => state.user,
  {logout}
)
class SideBar extends Component {
  handlelogin = () => {
      this.props.history.push("/login"); 
  }
  handleregister = () => {
      this.props.history.push("/register"); 
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={() => console.log(this)}>个人信息</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={() => console.log(this)}>我的文章</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={() => this.props.logout()}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
    if (checkSession()){
      return (
	    		 <Form layout="inline" style={{margin: "12px auto", float: "right"}}>
            		<FormItem style={{marginLeft: 16, marginRight: 0}}>
                      <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" style={{color: "white", fontSize: "15px"}}>
                          欢迎您! {sessionStorage.getItem("username")} <Icon type="down" />
                        </a>
                      </Dropdown>
            		</FormItem>  
                  </Form>
      )
       }else{
        return (
	    		 <Form layout="inline" style={{margin: "12px auto", float: "right"}}>
            		<FormItem style={{marginLeft: 16, marginRight: 0}}>
            		  <Button
            		    type="primary"
	    		        onClick={this.handleregister}
            		  >
	    				注册
            		  </Button>
            		</FormItem>  
            		<FormItem style={{marginLeft: 16, marginRight: 0}}>
            		  <Button
            		    type="primary"
	    		        onClick={this.handlelogin}
            		  >
	    				登录
            		  </Button>
            		</FormItem>  
                  </Form>

        );

       
       }
  }
}

export default SideBar;
