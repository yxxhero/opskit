import React, { Component } from 'react';
import {Empty, message, Avatar, Spin, Row, Col, Card, Comment, Tooltip, List} from 'antd';
import { withRouter  } from 'react-router-dom'
import { connect  } from 'react-redux';
import "video-react/dist/video-react.css";
import moment from 'moment';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { getQueryString } from '../../util/searchparse_helper';
import './articleview.css'
import { getnoteinfo } from '../../redux/note.redux'
import RecommendIndex from '../recommend/recommend'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


const data = [
  {
    actions: [<span>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

@withRouter
@connect(
  state => state.note,
  {getnoteinfo}
)
class ArticleView extends Component {
    state = {
          data: [],
          loading: false,
          hasMore: true,
        
    }

    componentDidMount () {
      if(getQueryString(this.props.location.search).note_id){
        this.props.getnoteinfo({id: getQueryString(this.props.location.search).note_id});
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
                         title="测试视频"
                         bodyStyle={{padding: '0px'}}
                       >
                         { this.props.noteinfo.content ? <div style={{margin: '10px'}}  dangerouslySetInnerHTML = {{__html: this.props.noteinfo.content }} ></div> : <Empty />}
                        </Card>
                     </Col>
                   </Row>
                   <br />
                   <Row>
                     <Col span={24}>
                         <List
                           bordered={true}
                           itemLayout="horizontal"
                           dataSource={data}
                           renderItem={item => (
                             <Comment
                               style={{background: "white", paddingLeft: "8px"}} 
                               actions={item.actions}
                               author={item.author}
                               avatar={item.avatar}
                               content={item.content}
                               datetime={item.datetime}
                             />
                           )}
                         />
                     </Col>
                   </Row>
                </Col>
                <Col span={7}>
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
