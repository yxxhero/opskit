import React, { Component } from 'react';
import { message, Avatar, Switch, Divider, Table, Select, Card, Col, Row, Breadcrumb, Form, Input, Button } from 'antd';
import { connect  } from 'react-redux';
import { getuserlist } from '../../redux/adminuser.redux'
import { putAjax } from '../../util/axios'

const Option = Select.Option;

@Form.create()
@connect(
  state => state.adminusers,
  {getuserlist}
)
class AdminUserIndex extends Component {

    componentDidMount () {
		console.log(this.props)	
        this.props.getuserlist();
	} 

    handlePageChaneg = (page, pageSize) => {
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getuserlist({
            page: page,
            pagesize: pageSize,
            username: values.username,
            is_auditing: values.is_auditing
          })
        }
      });
    }

    handlePageSizeChange = (current, size) => {
      console.log(current, size);
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getuserlist({
            page: current,
            pagesize: size,
            username: values.username,
            is_auditing: values.is_auditing
          })
        }
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.getuserlist({
              username: values.username,
              is_auditing: values.is_auditing
            })
          }
        });
    }

    handleswitchChange = (checked, record) =>  {
      console.log(checked);
      console.log(record);
      const _that = this;
      putAjax('/admin/users', {username: record.username, is_auditing: checked ? 1 : 0},
        function(response){
          message.success("修改成功");
          _that.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              _that.props.getuserlist({
                username: values.username,
                is_auditing: values.is_auditing
              })
            }
          });
        }
      )
    }

    render(){

      const columns = [{
        title: '用户名',
        dataIndex: 'username',
        align: 'center'
      }, {
        title: '文章数量',
        align: 'center',
        dataIndex: 'essay_count'
      }, {
        title: '邮箱',
        align: 'center',
        dataIndex: 'email'
      }, {
        title: '角色',
        align: 'center',
        dataIndex: 'role'
      }, {
        title: '注册时间',
        align: 'center',
        dataIndex: 'create_time'
      }, {
        title: '头像',
        align: 'center',
        dataIndex: 'avatar',
        render: (text) => {
          return <Avatar src={text} />;
        }
      }, {
        title: '是否审核',
        align: 'center',
        dataIndex: 'is_auditing',
        render: (text, record) => {
          console.log(text);
          return <Switch checked={text} onChange={(status) => this.handleswitchChange(status, record)} />; 
        }
      }];
        const formItemLayout = {
          labelCol: {
            sm: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 16 }
          },
        }
        const formButtonLayout = {
          labelCol: {
            sm: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 2, offset: 14 }
          },
        }
        const { getFieldDecorator  } = this.props.form;
	    return (
          <div>
         <Row>
         <Col span={20} offset={2}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>用户管理</Breadcrumb.Item>
         </Breadcrumb>
            <Row>
              <Col span={24}>
                <Card>
                  <Row>
                  <Form onSubmit={this.handleSubmit}>
                    <Col span={8}>
                       <Form.Item 
                        {...formItemLayout}
                        label='用户名'
                        >
                         {getFieldDecorator('username')(
                           <Input 
                             style={{ width: 250 }}
                             placeholder="用户名" 
                           />
                         )}
                       </Form.Item>
                    </Col>
                    <Col span={8}>
                       <Form.Item 
                         label='状态'
                         {...formItemLayout}
                       >
                         {getFieldDecorator('is_auditing')(
                           <Select
                             allowClear
                             showSearch
                             style={{ width: 250 }}
                             placeholder="状态选择"
                             optionFilterProp="children"
                             filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >
                             <Option value={0}>未审核</Option>
                             <Option value={1}>已审核</Option>
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
                       rowKey="username"
                       loading={this.props.loading}
                       dataSource={this.props.userlist} 
                       pagination={{
                         showQuickJumper: true,
                         showSizeChanger: true,
                         total: this.props.total,
                         onChange: this.handlePageChaneg,
                         onShowSizeChange: this.handlePageSizeChange,
                         showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} `
                       }}
                       columns={columns} 
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


export { AdminUserIndex }
