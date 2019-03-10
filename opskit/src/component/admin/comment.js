import React, { Component } from 'react';
import { Tooltip, message, Icon, Avatar, Divider, Table, Select, Card, Col, Row, Breadcrumb, Form, Input, Button } from 'antd';
import { connect  } from 'react-redux';
import { getadmincommentlist } from '../../redux/admincomment.redux'
import { putAjax } from '../../util/axios'
import { cutstr } from '../../util/util'

const Option = Select.Option;
const StateDict = {
  0: "审核中",
  1: "已审核",
  2: "未通过"
}

@Form.create()
@connect(
  state => state.admincomments,
  {getadmincommentlist}
)
class AdminCommentIndex extends Component {

    componentDidMount () {
		console.log(this.props)	
        this.props.getadmincommentlist();
	} 

    handlePageChaneg = (page, pageSize) => {
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getadmincommentlist({
            page: page,
            pagesize: pageSize,
            state: values.state
          })
        }
      });
    }

    handlePageSizeChange = (current, size) => {
      console.log(current, size);
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getadmincommentlist({
            page: current,
            pagesize: size,
            state: values.state
          })
        }
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.getadmincommentlist({
              state: values.state
            })
          }
        });
    }


    render(){

      const columns = [{
        title: '标题',
        dataIndex: 'title',
        align: 'center',
        render: (text) => <Tooltip title={text}>{cutstr(text)}</Tooltip> 
      }, {
        title: '用户名',
        align: 'center',
        dataIndex: 'username'
      }, {
        title: '评论内容',
        align: 'center',
        dataIndex: 'content',
        render: (text) => <Tooltip title={text}>{cutstr(text)}</Tooltip> 
      }, {
        title: '创建时间',
        align: 'center',
        dataIndex: 'create_time'
      }, {
        title: '更新时间',
        align: 'center',
        dataIndex: 'update_time'
      }, {
        title: '用户头像',
        align: 'center',
        dataIndex: 'avatar',
        render: (text) => {
          return <Avatar src={text} />;
        }
      }, {
        title: '文章类型',
        align: 'center',
        dataIndex: 'note_type'
      }, {
        title: '状态',
        align: 'center',
        dataIndex: 'state',
        render: (text) => StateDict[text] 
      }, {
        title: '操作',
        align: 'center',
        dataIndex: 'id',
        render: (text, record) => {
          return <Icon type="edit" onClick={() => console.log(record)}/>
        }
      }];
        const formItemLayout = {
          labelCol: {
            sm: { span: 4 }
          },
          wrapperCol: {
            sm: { span: 20 }
          }
        }
        const formButtonLayout = {
          labelCol: {
            sm: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 2, offset: 14 }
          }
        }
        const { getFieldDecorator  } = this.props.form;
	    return (
         <div>
         <Row>
         <Col span={20} offset={2}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>评论管理</Breadcrumb.Item>
         </Breadcrumb>
            <Row>
              <Col span={24}>
                <Card>
                  <Row>
                  <Form onSubmit={this.handleSubmit}>
                    <Col span={16} style={{float: 'left'}}>
                       <Form.Item 
                         label='状态'
                         {...formItemLayout}
                       >
                         {getFieldDecorator('state', {initialValue: 0})(
                           <Select
                             allowClear
                             showSearch
                             style={{ width: 250 }}
                             placeholder="状态选择"
                             optionFilterProp="children"
                             filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >
                             <Option value={0}>审核中</Option>
                             <Option value={1}>已审核</Option>
                             <Option value={2}>未通过</Option>
                           </Select>

                         )}
                       </Form.Item>

                    </Col>
                    <Col span={8}>
                       <Form.Item 
                         label=''
                         {...formButtonLayout}
                       >
                        <Button type="primary" htmlType="submit">查询</Button>
                       </Form.Item>
                    </Col>
                    </Form>
                  </Row>
                  <Divider />
                  <Row>
                   <Col span={24}>
                     <Table 
                       rowKey="id"
                       loading={this.props.loading}
                       dataSource={this.props.commentlist} 
                       columns={columns} 
                       pagination={{
                         showQuickJumper: true,
                         showSizeChanger: true,
                         total: this.props.commenttotal,
                         onChange: this.handlePageChaneg,
                         onShowSizeChange: this.handlePageSizeChange,
                         showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} `
                       }}
                     />
                   </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
              </Col>
            </Row>
          </div> 
		)
	}
}


export { AdminCommentIndex }
