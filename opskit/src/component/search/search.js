import React, { Component } from 'react';
import { Icon, message, Form, List, Avatar, Carousel, Card, Col, Row, Input, Breadcrumb } from 'antd';
import { connect  } from 'react-redux';
import { getsearchnotelist } from '../../redux/search.redux'

const Search = Input.Search;

@Form.create()
@connect(
  state => state.searchnotes,
  {getsearchnotelist}
)
class SearchIndex extends Component {

    state = {
       keyword: ""
    }

    componentDidMount () {
		console.log(this.props)	
	} 

    handleSearch = (value) => {
      if (value.length){
          this.setState(
            {
              keyword: value
            }
          )
          this.props.getsearchnotelist({
            keyword: value
          })
      } else {
        message.error("关键词不能为空");
      }
    }

    handlePageChange = (page, pageSize) => {
          this.props.getsearchnotelist({
            page: page,
            pagesize: pageSize,
            keyword: this.state.keyword
          })
    }

    handlePageSizeChange = (current, size) => {
          this.props.getsearchnotelist({
            page: current,
            pagesize: size,
            keyword: this.state.keyword,
          })
    }
    render(){
	    return (
          <div>
         <Row>
         <Col span={22} offset={1}>
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
		         onSearch={this.handleSearch}
				 style={{ width: "50%", margin: "0 25%"}}
		       />
				</div>
              </Col>
            </Row>
				<br /><br />
            <Row gutter={16}>
              <Col span={12}>
               <Carousel autoplay>
                 <a rel="noopener noreferrer" target="_blank" href="https://github.com/yxxhero">
                   <img alt="" src="https://www.aiopsclub.com/carousels/github.jpg" height="100%" width="100%"/>
                 </a>
    		   </Carousel> 
              </Col>
              <Col span={12}>
               <Carousel autoplay>
                 <a rel="noopener noreferrer" target="_blank" href="https://github.com/yxxhero">
                   <img alt="" src="https://www.aiopsclub.com/carousels/devops.jpg" height="100%" width="100%"/>
                 </a>
    		   </Carousel> 
              </Col>
            </Row>
				<br /><br />
            <Row>
              <Col span={24}>
                <Card bordered={false}>
                 <List
                   loading={this.props.searchloading}
                   itemLayout="horizontal"
                   dataSource={this.props.searchnotelist}
                   pagination={{
                     showQuickJumper: true,
                     showSizeChanger: true,
                     total: this.props.searchnotetotal,
                     onChange: this.handlePageChange,
                     onShowSizeChange: this.handlePageSizeChange,
                   }}
                   renderItem={item => (
                   <List.Item 
                     actions={[
                     <span><Icon type="eye" style={{fontSize: '15px', marginRight: '8px'}}/> {item.view_count}</span>,
                     <span><Icon type="message" style={{fontSize: '15px', marginRight: '8px'}}/>{item.comment_count}</span>
                     ]}
                   >
                         <List.Item.Meta
                           avatar={<Avatar shape="square" size="large" src={item.avatar} />}
                           title={item.username}
                           description={<a href={`/essay/view/?note_id=${item.id}`}>{item.title}</a>}
                         />
                         <div style={{ marginLeft: 'auto', marginLight: 'auto'}}>
                           <span style={{display: 'block'}}>
                             更新时间
                           </span>
                           <span>
                             {item.update_time}
                           </span>
                         </div>
                     </List.Item>
                   )}
                 />  
                </Card>
              </Col>
            </Row>
              </Col>
            </Row>
          </div> 
		)
	}
}


export { SearchIndex }
