import React, { Component } from 'react';
import { Carousel, Card, Col, Row, Input, Breadcrumb } from 'antd';
import "./search.css"

const Search = Input.Search;
class SearchIndex extends Component {
    componentDidMount () {
		console.log(this.props)	
	} 

    render(){
	    return (
          <div>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>搜索</Breadcrumb.Item>
         </Breadcrumb>
            <Row>
              <Col span={24}>
				<div>
		       <Search
		         placeholder="知识海洋漫游"
		         enterButton
		         size="large"
		         onSearch={value => console.log(value)}
				 style={{ width: "50%", margin: "0 25%"}}
		       />
				</div>
              </Col>
            </Row>
				<br /><br />
            <Row gutter={16}>
              <Col span={12}>
               <Carousel autoplay>
   			    <div><h3>自</h3></div>
   			    <div><h3>我</h3></div>
   			    <div><h3>投</h3></div>
   			    <div><h3>资</h3></div>
    		   </Carousel> 
              </Col>
              <Col span={12}>
               <Carousel autoplay>
   			    <div><h3>自</h3></div>
   			    <div><h3>我</h3></div>
   			    <div><h3>投</h3></div>
   			    <div><h3>资</h3></div>
    		   </Carousel> 
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
