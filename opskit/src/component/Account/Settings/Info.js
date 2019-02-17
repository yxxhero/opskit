import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Menu, Row, Col, Breadcrumb } from 'antd';
import GridContent from '@/component/PageHeaderWrapper/GridContent';
import './Info.less';

const { Item } = Menu;

@withRouter
class Info extends Component {
  constructor(props) {
    super(props);
    const { match, location } = props;
    // const menuMap = {
    //   base: "基本设置",
    //   security: "安全设置",
    //   binding: "账户绑定",
    //   notification: "消息通知"
    // };
    const menuMap = {
      base: "基本设置"
    };
    const key = location.pathname.replace(`${match.path}/`, '');
    this.state = {
      mode: 'inline',
      menuMap,
      selectKey: menuMap[key] ? key : 'base',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { match, location } = props;
    let selectKey = location.pathname.replace(`${match.path}/`, '');
    selectKey = state.menuMap[selectKey] ? selectKey : 'base';
    if (selectKey !== state.selectKey) {
      return { selectKey };
    }
    return null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getmenu = () => {
    const { menuMap } = this.state;
    return Object.keys(menuMap).map(item => <Item key={item}>{menuMap[item]}</Item>);
  };

  getRightTitle = () => {
    const { selectKey, menuMap } = this.state;
    return menuMap[selectKey];
  };

  selectKey = ({ key }) => {
    this.props.history.push(`/account/setting/${key}/`);
    this.setState({
      selectKey: key,
    });
  };

  resize = () => {
    if (!this.main) {
      return;
    }
    requestAnimationFrame(() => {
      let mode = 'inline';
      const { offsetWidth } = this.main;
      if (this.main.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      this.setState({
        mode,
      });
    });
  };

  render() {
    const { children } = this.props;
    const { mode, selectKey } = this.state;
    return (
      <div>
      <GridContent>
       <Row gutter={24}>
          <Col span={11} offset={1}>
            <Breadcrumb style={{ margin: '16px 0' }}> 
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>个人设置</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
      </Row>
        <Row gutter={24}>
          <Col span={22} offset={1}>
            <div
              className='main'
              ref={ref => {
                this.main = ref;
              }}
            >
              <div className='leftmenu'>
                <Menu mode={mode} selectedKeys={[selectKey]} onClick={this.selectKey}>
                  {this.getmenu()}
                </Menu>
              </div>
              <div className='right'>
                <div className='title'>{this.getRightTitle()}</div>
                {children}
              </div>
            </div>
          </Col>
       </Row>
      </GridContent>
    </div>
    );
  }
}

export default Info;
