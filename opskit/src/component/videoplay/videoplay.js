import React, { Component } from 'react';
import {Row, Col, Card, Comment, Tooltip, List} from 'antd';
import { Player, BigPlayButton, LoadingSpinner, PlaybackRateMenuButton, ControlBar } from 'video-react';
import { withRouter  } from 'react-router-dom'
import "video-react/dist/video-react.css";
import moment from 'moment';

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

    componentDidMount () {
        this.player.playbackRate = 1;
        this.forceUpdate();
	} 
    

    render(){

	    return (
            <div style={{ textAlign: 'center', margin: '16px 0' }}>
              <Row>
                <Col span={16} offset={1}>
                   <Row>
                     <Col span={24}>
                        <Card>
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
                   <Row>
                     <Col span={24}>
                         <List
                           className="comment-list"
                           bordered={true}
                           itemLayout="horizontal"
                           dataSource={data}
                           renderItem={item => (
                             <Comment
                               style={{background: "white", textAlign: 'left'}} 
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
              </Row>
          </div>
		       )
	}
}


export { VideoPlay }
