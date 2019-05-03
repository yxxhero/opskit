import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { checkAdmin, replaceAll, checkSession } from '../../util/util'

const SubMenu = Menu.SubMenu;
const menuItemList = [".video.", ".hadoop.",".index.",".web.",".database.",".docker.",".security.", ".essay.add.", ".video.play.", ".essay.view.", ".account.center.", ".account.setting.base.", ".admin.user.", ".admin.essay.", ".admin.comment."]; 

@withRouter
class MenuList extends Component {
  state = {
      itemkey: ""
  }
  handleMenuClick = (item) => {
    this.props.history.push(replaceAll(item.key, /\./, "/"));
	console.log(this.props)	 
  }
  componentWillMount () {
      this.setState({itemkey:replaceAll(this.props.location.pathname, "/", ".")}); 
  }   
  render() {
    return (
         <Menu
           theme="dark"
           mode="horizontal"
           defaultSelectedKeys={menuItemList.indexOf(this.state.itemkey) != -1 ? [this.state.itemkey] : [".index."]}
           style={{ lineHeight: '64px'}}
         >
           <Menu.Item key=".index." onClick={this.handleMenuClick}>首页</Menu.Item>
           <Menu.Item key=".video." onClick={this.handleMenuClick}>视频</Menu.Item>
           <Menu.Item key=".web." onClick={this.handleMenuClick}>web服务</Menu.Item>
           <Menu.Item key=".database." onClick={this.handleMenuClick}>数据库</Menu.Item>
           <Menu.Item key=".docker." onClick={this.handleMenuClick}>容器</Menu.Item>
           <Menu.Item key=".security." onClick={this.handleMenuClick}>安全</Menu.Item>
           <Menu.Item key=".hadoop." onClick={this.handleMenuClick}>大数据</Menu.Item>
           { checkSession() ?
           <SubMenu key="account" title="个人主页">
             <Menu.Item key=".account.center." onClick={this.handleMenuClick}>个人中心</Menu.Item>
             <Menu.Item key=".account.setting.base." onClick={this.handleMenuClick}>个人设置</Menu.Item>
           </SubMenu> : null
           }

           { checkAdmin() ?
           <SubMenu key="admin" title="后台管理">
             <Menu.Item key=".admin.essay." onClick={this.handleMenuClick}>文章审核</Menu.Item>
             <Menu.Item key=".admin.user." onClick={this.handleMenuClick}>用户审核</Menu.Item>
             <Menu.Item key=".admin.comment." onClick={this.handleMenuClick}>评论审核</Menu.Item>
           </SubMenu> : null
           }
         </Menu>
    );
  }
}

export default MenuList;
