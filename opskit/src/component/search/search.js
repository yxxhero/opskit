import React, { Component } from 'react';
import { Card, Col, Row, Input, Breadcrumb } from 'antd';

const Search = Input.Search;
class SearchIndex extends Component {

    render(){
	    return (
          <div>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>搜索</Breadcrumb.Item>
         </Breadcrumb>
            <Row gutter={16}>
              <Col span={24}>
				<div>
		       <Search
		         placeholder="input search text"
		         enterButton="Search"
		         size="large"
		         onSearch={value => console.log(value)}
				  style={{ width: "50%", margin: "0 25%"}}
		       />
				</div>
              </Col>
            </Row>
				<br /><br />
            <Row gutter={16}>
              <Col span={6}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={6}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={6}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={6}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
            </Row>
          </div> 
		)
	}
}


export { SearchIndex }
