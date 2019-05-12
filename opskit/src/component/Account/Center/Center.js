import React, { PureComponent } from 'react';
import {withRouter } from 'react-router-dom'
import { Breadcrumb, Input, Card, Row, Col, Icon } from 'antd';
import { connect  } from 'react-redux';
import GridContent from '@/component/PageHeaderWrapper/GridContent';
import { getuserinfo } from '../../../redux/userinfo.redux'
import { getusernotelist } from '../../../redux/usernotes.redux'
import './Center.less';

const Search = Input.Search;

@withRouter
@connect(
  state => state.userinfo,
  {getuserinfo, getusernotelist}
)
class Center extends PureComponent {
  state = {
    inputValue: '',
    activeKey: 'articles'
  };

  componentDidMount() {
     this.props.getuserinfo();
  }

  handleArticleSearch = (value) => {
    this.props.getusernotelist({keyword: value});
  }

  onTabChange = key => {
    switch (key) {
      case 'articles':
        console.log(key);
        break;
      default:
        break;
    }
  };

  render() {
    const {
      children, username, userrole, useremail, userauditing, userinfoloading, useravatar, createtime, notecount, userdescription
    } = this.props;

    const operationTabList = [
      {
        key: 'articles',
        tab: (
          <span>
            文章 <span style={{ fontSize: 14 }}>({notecount})</span>
          </span>
        ),
      }
    ];

    return (
      <GridContent>
        <Row gutter={24}>
          <Col span={11} offset={1}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>个人中心</Breadcrumb.Item>
         </Breadcrumb>
       </Col>
       </Row>
        <Row gutter={24}>
          <Col span={7} offset={1}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={userinfoloading}>
                <div>
                  <div className='avatarHolder'>
                    <img alt="" src={useravatar} />
                    <div className='name'>{username}</div>
                    <div>{userdescription}</div>
                  </div>
                  <div>
                    <p>
                      <Icon type="idcard" className="detail"/>
                      {userauditing ? "审核通过" : "未审核"}
                    </p>
                    <p>
                      <Icon type="mail" className="detail"/>
                      {useremail}
                    </p>
                    <p>
                      <Icon type="user" className="detail"/>
                      {userrole}
                    </p>
                    <p>
                      <Icon type="hourglass" className="detail"/>
                      {createtime}
                    </p>
                  </div>
                </div>
            </Card>
          </Col>
          <Col span={15}>
            <Card
              className='tabsCard'
              bordered={false}
              title="用户内容管理"
              tabList={operationTabList}
              extra={
                  <Search
                    placeholder="关键字搜索(回车搜索)"
                    onSearch={this.handleArticleSearch}
                    style={{ width: 200 }}
                  />
              }
              activeTabKey={this.state.activeKey}
              onTabChange={this.onTabChange}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Center;

