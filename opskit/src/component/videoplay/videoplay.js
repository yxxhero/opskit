import React, { Component } from 'react';
import {message, Avatar, Spin, Row, Col, Card, Comment, Tooltip, List} from 'antd';
import { Player, BigPlayButton, LoadingSpinner, PlaybackRateMenuButton, ControlBar } from 'video-react';
import { withRouter  } from 'react-router-dom'
import "video-react/dist/video-react.css";
import moment from 'moment';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import './videoplay.css'
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
class VideoPlay extends Component {
    state = {
          data: [],
          loading: false,
          hasMore: true,
        
    }

    componentDidMount () {
        this.player.playbackRate = 1;
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
                          <Player 
                             ref={(c) => { this.player = c; }}
                          >
                            <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" type="video/mp4" />
                              <BigPlayButton position="center" />
                              <LoadingSpinner />
                              <ControlBar>
                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                              </ControlBar>
                          </Player>
                        </Card>
                     </Col>
                   </Row>
                   <br />
                   <Row>
                     <Col span={24}>
                         <List
                           className="comment-list"
                           bordered={true}
                           itemLayout="horizontal"
                           dataSource={data}
                           renderItem={item => (
                             <Comment
                               style={{background: "white"}} 
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
          </div>
		       )
	}
}


export { VideoPlay }
