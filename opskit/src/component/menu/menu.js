import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { checkAdmin, replaceAll, checkSession } from '../../util/util'

const SubMenu = Menu.SubMenu;
const menuItemList = [".ops.ai.", ".ops.framework.", ".ops.skill.", ".ops.base.", ".hadoop.",".index.",".web.",".database.",".docker.",".security.", ".essay.add.", ".essay.view.", ".account.center.", ".account.setting.base.", ".admin.user.", ".admin.essay.", ".admin.comment."]; 

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
           <SubMenu key="ops" title="运维技术">
             <Menu.Item key=".ops.base." onClick={this.handleMenuClick}>基础系列</Menu.Item>
             <Menu.Item key=".ops.skill." onClick={this.handleMenuClick}>技巧分享</Menu.Item>
             <Menu.Item key=".ops.framework." onClick={this.handleMenuClick}>架构总览</Menu.Item>
             <Menu.Item key=".ops.ai." onClick={this.handleMenuClick}>人工智能</Menu.Item>
           </SubMenu>
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
