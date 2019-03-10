import React, { Component } from 'react';
import { Avatar, Alert, Comment, Form, Input, Button, List } from 'antd';
import moment from 'moment';
import {momentChinaize} from '../../util/time_helper';

momentChinaize(moment)

const TextArea = Input.TextArea;
const CommentList = ({ comments, commenttotal, handlePageChange, handlePageSizeChange }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    bordered={true}
    header="文章评论"
    pagination={{
      showQuickJumper: true,
      showSizeChanger: true,
      total: commenttotal,
      onChange: handlePageChange,
      onShowSizeChange: handlePageSizeChange,
    }}
 	style={{background: "white", margin: '10px 0'}}
    renderItem={props => <Comment 
      author={props.username}
      avatar={<Avatar src={props.useravatar} style={{marginLeft: '10px'}}/>}
      content={props.content}
      datetime={moment(props.update_time).fromNow()}
    />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        style={{float: 'right'}}
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        抒发感受
      </Button>
    </Form.Item>
  </div>
);


class CommentForm extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render () {
    const { value } = this.state;
    const { comments, submitting, handleCommentSubmit, commenttotal, handlePageChange, handlePageSizeChange } = this.props;

    return (
      <div>
        {comments.length > 0 ? <CommentList 
          comments={comments}
          commenttotal={commenttotal}
          handlePageChange={handlePageChange}
          handlePageSizeChange={handlePageSizeChange}
        /> :
           <Alert style={{margin: "10px 0"}} message="暂无评论" type="info" />
        }
        <Editor
          onChange={this.handleChange}
          onSubmit={() => handleCommentSubmit(value)}
          submitting={submitting}
          value={value}
        />
      </div>
    );
}
}

export default CommentForm;
