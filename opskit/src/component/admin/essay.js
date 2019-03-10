import React, { Component } from 'react';
import { Tooltip, message, Avatar, Switch, Divider, Table, Select, Card, Col, Row, Breadcrumb, Form, Input, Button } from 'antd';
import { connect  } from 'react-redux';
import { getadminnotelist } from '../../redux/adminnote.redux'
import { putAjax } from '../../util/axios'
import { cutstr } from '../../util/util'

const Option = Select.Option;

@Form.create()
@connect(
  state => state.adminnotes,
  {getadminnotelist}
)
class AdminNoteIndex extends Component {

    componentDidMount () {
		console.log(this.props)	
        this.props.getadminnotelist();
	} 

    handlePageChaneg = (page, pageSize) => {
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getadminnotelist({
            page: page,
            pagesize: pageSize,
            keyword: values.keyword,
            is_public: values.is_public
          })
        }
      });
    }

    handlePageSizeChange = (current, size) => {
      console.log(current, size);
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.getadminnotelist({
            page: current,
            pagesize: size,
            keyword: values.keyword,
            is_public: values.is_public
          })
        }
      });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.props.getadminnotelist({
              keyword: values.keyword,
              is_public: values.is_public
            })
          }
        });
    }

    handleswitchChange = (checked, record) =>  {
      const _that = this;
      putAjax('/admin/notes', {id: record.id, is_public: checked},
        function(response){
          message.success("修改成功");
          _that.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              _that.props.getadminnotelist({
                keyword: values.keyword,
                is_public: values.is_public
              })
            }
          });
        }
      )
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
        title: '阅读数',
        align: 'center',
        dataIndex: 'view_count'
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
        title: '是否公开',
        align: 'center',
        dataIndex: 'is_public',
        render: (text, record) => {
          return <Switch checked={text} onChange={(status) => this.handleswitchChange(status, record)} />; 
        }
      }];
        const formItemLayout = {
          labelCol: {
            sm: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 16 }
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
           <Breadcrumb.Item>文章管理</Breadcrumb.Item>
         </Breadcrumb>
            <Row>
              <Col span={24}>
                <Card>
                  <Row>
                  <Form onSubmit={this.handleSubmit}>
                    <Col span={8}>
                       <Form.Item 
                        {...formItemLayout}
                        label='关键词'
                        >
                         {getFieldDecorator('keyword')(
                           <Input 
                             style={{ width: 250 }}
                             placeholder="关键词" 
                           />
                         )}
                       </Form.Item>
                    </Col>
                    <Col span={8}>
                       <Form.Item 
                         label='状态'
                         {...formItemLayout}
                       >
                         {getFieldDecorator('is_public')(
                           <Select
                             allowClear
                             showSearch
                             style={{ width: 250 }}
                             placeholder="状态选择"
                             optionFilterProp="children"
                             filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >
                             <Option value={0}>未公开</Option>
                             <Option value={1}>已公开</Option>
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
                       dataSource={this.props.notelist} 
                       columns={columns} 
                       pagination={{
                         showQuickJumper: true,
                         showSizeChanger: true,
                         total: this.props.notetotal,
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


export { AdminNoteIndex }
