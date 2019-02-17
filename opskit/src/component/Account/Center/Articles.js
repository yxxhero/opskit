import React, { PureComponent } from 'react';
import { List, Tag } from 'antd';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ArticleListContent from '../../ArticleListContent';
import { IconText } from '../../common/common'
import { getusernotelist } from '../../../redux/usernotes.redux'
import './Articles.less';

@withRouter
@connect(
  state => state.usernotes,
  {getusernotelist}
)
class Center extends PureComponent {

  state = {
    pagesize: 10
  };

  componentDidMount () {
    this.props.getusernotelist();
  }

  handlePageChange = (page, pagesize) => {
    this.props.getusernotelist({page, page_size: pagesize});
  }

  handleShowSizeChange = (current, size) => {
    this.props.getusernotelist({page: current, page_size:size});
  }

  render() {
    const {usernotetotal, usernotelist, usernotesloading} = this.props; 
    return (
      <List
        className='articleList'
        rowKey="id"
        itemLayout="vertical"
        dataSource={usernotelist}
        loading={usernotesloading}
        pagination={{
          onChange: this.handlePageChange, 
          pageSize: this.state.pagesize,
          total: usernotetotal, 
          onShowSizeChange: this.handleShowSizeChange, 
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: total => `总共 ${total} 条经验`
        }}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="eye-o" text={item.view_count} />,
              <IconText type="message" text={10} />,
            ]}
          >
            <List.Item.Meta
              title={
                <a className='listItemMetaTitle' href={item.href}>
                  {item.title}
                </a>
              }
              description={
                <span>
                  <Tag>{item.note_type}</Tag>
                </span>
              }
            />
            <ArticleListContent data={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default Center;
