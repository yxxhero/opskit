import React from 'react';
import { List, message, Spin } from 'antd';
import { Appconfig } from '@/config';
import reqwest from 'reqwest';
import { checkSession } from '../../util/util'
import './message.css';

import InfiniteScroll from 'react-infinite-scroller';

const DataUrl = Appconfig.serverBaseUrl + "resource/messages";

class MessageList extends React.Component {
  state = {
    data: [],
    end: false,
    page: 1,
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.data,
        end: res.end
      });
    });
  }

  fetchData = callback => {
    if (checkSession()){
        let token = sessionStorage.jwttoken;
        if(token){
            reqwest({
              data: { state: 0, page: this.state.page },
              url: DataUrl,
              type: 'json',
              method: 'get',
              headers: {Authorization: token },
              contentType: 'application/json',
              success: res => {
                callback(res);
              },
            });
          this.setState({
            page: this.state.page + 1
          })
        };
    } else {
      console.log("未登录");
    }
  };

  handleInfiniteOnLoad = () => {
    let { end, data } = this.state;
    this.setState({
      loading: true,
    });
    if (end) {
      message.warning('消息加载完毕');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.data);
      this.setState({
        data,
        end: res.end,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="message-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            size="small"
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="message-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default MessageList; 
