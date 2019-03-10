import React, { Component } from 'react';
import {Empty, message, Avatar, Spin, Row, Col, Card, List, Icon} from 'antd';
import { withRouter  } from 'react-router-dom'
import { connect  } from 'react-redux';
import "video-react/dist/video-react.css";
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { getQueryString } from '../../util/searchparse_helper';
import { postAjax } from '../../util/axios';
import './articleview.css'
import { getnoteinfo, getcommentlist } from '../../redux/note.redux'
import RecommendIndex from '../recommend/recommend'
import CommentForm from '../comment/comment'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


@withRouter
@connect(
  state => state.note,
  {getnoteinfo, getcommentlist}
)
class ArticleView extends Component {
    state = {
          data: [],
          loading: false,
          hasMore: true,
        
    }

    handleCommentSubmit = (value) => {
      if(!value.length){
        message.error("评论内容不能为空");
        return;
      }
      postAjax('/resource/comments', {
        id: getQueryString(this.props.location.search).note_id,
        content: value
      },
          function(response){
            message.success("评论成功");
          }
        )

    }

    handlePageChange = (page, pageSize) => {
          this.props.getcommentlist({
            page: page,
            page_size: pageSize,
            note_id: getQueryString(this.props.location.search).note_id 
          })
    }

    handlePageSizeChange = (current, size) => {
          this.props.getcommentlist({
            page: current,
            page_size: size,
            note_id: getQueryString(this.props.location.search).note_id 
          })
    }

    componentDidMount () {
      if(getQueryString(this.props.location.search).note_id){
        this.props.getnoteinfo({id: getQueryString(this.props.location.search).note_id});
        this.props.getcommentlist({note_id: getQueryString(this.props.location.search).note_id})
      }else{
        message.error("缺少文章id");
      };
        this.forceUpdate();
        this.fetchData((res) => {
          this.setState({
                    data: res.results,
                  
          });
              
        });
	} 

    fetchData = (callback) => {
      reqwest({
              url: fakeDataUrl,
              type: 'json',
              method: 'get',
              contentType: 'application/json',
        success: (res) => {
                  callback(res);
                
        },
            
      });
        
    }

    handleInfiniteOnLoad = () => {
          let data = this.state.data;
      this.setState({
              loading: true,
            
      });
      if (data.length > 14) {
              message.warning('Infinite List loaded all');
        this.setState({
                  hasMore: false,
                  loading: false,
                
        });
              return;
            
      }
      this.fetchData((res) => {
              data = data.concat(res.results);
        this.setState({
                  data,
                  loading: false,
        });
            
      });
        
    }

    

    render(){

	    return (
            <div style={{ margin: '16px 0' }}>
              <Row gutter={24}>
                <Col span={16} offset={1}>
                   <Row>
                     <Col span={24}>
                       <Card
                         title={
                           <div>
                           <Row gutter={48}>
                             <Col span={1}>
                               <Avatar style={{width: '45px', height: '45px', lineHeight: '45px'}} shape="square" size="large" src={this.props.noteinfo.useravatar} /> 
                             </Col>
                             <Col span={8}>
                             <div>
                               <span style={{display: 'block'}}>{this.props.noteinfo.username}</span>
                               <span>{this.props.noteinfo.title}</span>
                             </div>
                             </Col>
                             <Col span={11}>
                             <div>
                               <span style={{display: 'block'}}>更新时间</span>
                               <span>{this.props.noteinfo.updatetime}</span>
                             </div>
                             </Col>
                             <Col span={2}>
                             <div style={{float: 'right'}}>
                               <span style={{display: 'block'}}> <Icon type="eye" style={{marginRight: '10px'}}/> {this.props.noteinfo.view_count}</span>
                               <span> <Icon type="message" style={{marginRight: '14px'}}/>{this.props.noteinfo.comment_count}</span>
                             </div>
                             </Col>
                           </Row>
                           </div>
                         }
                         bodyStyle={{padding: '0px'}}
                       >
                         { this.props.noteinfo.content ? <div style={{margin: '10px'}}  dangerouslySetInnerHTML = {{__html: this.props.noteinfo.content }} ></div> : <Empty />}
                        </Card>
                     </Col>
                   </Row>
                   <br />
                   <Row>
                     <Col span={24}>
                       <CommentForm 
                         handlePageChange={this.handlePageChange}
                         handlePageSizeChange={this.handlePageSizeChange}
                         commenttotal={this.props.commenttotal}
                         handleCommentSubmit={this.handleCommentSubmit}
                         submitting={false}
                         comments={this.props.commentlist}
                       />
                     </Col>
                   </Row>
                </Col>
                <Col span={6}>
                  <Row>
                    <Col span={24}>
                  <Card
                    size="small"
                    title="视频系列"
                    bodyStyle={{padding: '0px'}}
                  >
                  <div className="demo-infinite-container">
                    <InfiniteScroll
                      initialLoad={false}
                      pageStart={0}
                      loadMore={this.handleInfiniteOnLoad}
                      hasMore={!this.state.loading && this.state.hasMore}
                      useWindow={false}
                    >
                      <List
                        dataSource={this.state.data}
                        renderItem={item => (
                          <List.Item key={item.id}>
                            <List.Item.Meta
                              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                              title={<a href="https://ant.design">{item.name.last}</a>}
                              description={item.email}
                            />
                          </List.Item>
                        )}
                      >
                        {this.state.loading && this.state.hasMore && (
                          <div className="demo-loading-container">
                            <Spin />
                          </div>
                        )}
                      </List>
                    </InfiniteScroll>
                  </div>
                  </Card>
              </Col>
              </Row>
              <br />
                  <Row>
                    <Col span={24}>
                      <RecommendIndex />
                </Col>
              </Row>
                </Col>
              </Row>
          </div>
		       )
	}
}


export { ArticleView }
