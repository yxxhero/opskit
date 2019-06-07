import React, { PureComponent } from 'react';
import { Modal, Icon, List, Tag, message } from 'antd';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ArticleListContent from '../../ArticleListContent';
import { IconText } from '../../common/common'
import { deleteAjax } from '../../../util/axios'
import { getusernotelist } from '../../../redux/usernotes.redux'
import './Articles.less';
const confirm = Modal.confirm;

@withRouter
@connect(
  state => state.usernotes,
  {getusernotelist}
)
class Center extends PureComponent {

  state = {
    page: 1,
    pagesize: 10
  };

  componentDidMount () {
    this.props.getusernotelist();
    console.log(this.props.center);
  }

  handlePageChange = (current, pagesize) => {
    this.props.getusernotelist({page: current, page_size: pagesize, keyword: this.props.center.state.keyword});
    this.setState(
      { 
        'pagesize': pagesize,
        'page': current
      }      
    )
  }

  handleShowSizeChange = (current, size) => {
    this.props.getusernotelist({page: current, page_size:size, keyword: this.props.center.state.keywor});
    this.setState(
      { 
        'pagesize': size,
        'page': current 
      }      
    )
  }

  handleessaydelete = (id) => {
    const _that = this;
    confirm({
      title: '确定删除吗?',
      onOk() {
        deleteAjax('/resource/note', {id}, 
          function (response){
            message.success("删除成功");
            _that.props.getusernotelist();
          }
        )
      }
    });
  }

  handleessayedit = (id) => {
    this.props.history.push('/essay/edit/?note_id=' + id);
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
          current: this.state.page,
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
              <IconText type="message" text={item.comment_count} />,
              <Icon type="delete" onClick={() => this.handleessaydelete(item.id)} />,
              <Icon type="edit" onClick={() => this.handleessayedit(item.id)}/>
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
                  <Tag>{ item.is_public ? '已审核' : '未审核' }</Tag>
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
