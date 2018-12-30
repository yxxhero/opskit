import React, { Component } from 'react';
import {Card, Icon, Avatar, Row, Col, Form, Button, Select, Divider} from 'antd';
import { withRouter  } from 'react-router-dom'
import "./video.css"

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8, offset: 16 },
}
const Option = Select.Option;
const { Meta  } = Card;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

@withRouter
@Form.create()
class VideoIndex extends Component {

    componentDidMount () {
		console.log(this.props)	
	} 
    
    check = () => {
        console.log("check");
    }
    
    videoclick = (e) => {
        console.log(e);
    }

    render(){
        const { getFieldDecorator  } = this.props.form;
	    return (
                <div style={{ textAlign: 'center', margin: '16px 0' }}>
                  <Row>
                  <Form layout="inline"  hideRequiredMark>
                   <Form.Item {...formItemLayout} label="技术分类">
                     {getFieldDecorator('techsort', {
                       rules: [{
                         required: true,
                         message: '请选择技术类别',
                       }],
                     })(
      					 <Select
      					   showSearch
      					   style={{ width: 200 }}
      					   placeholder="技术分类"
      					   optionFilterProp="children"
      					   onChange={handleChange}
      					   onFocus={handleFocus}
      					   onBlur={handleBlur}
      					   filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      					 >
      					   <Option value="linux">linux</Option>
      					   <Option value="web">web</Option>
      					   <Option value="docker">docker</Option>
      					 </Select>

                     )}
                   </Form.Item>
                   <Form.Item {...formItemLayout} label="视频级别">
                     {getFieldDecorator('videolevel', {
                       rules: [{
                         required: true,
                         message: '请选择视频级别',
                       }],
                     })(
      					 <Select
      					   showSearch
      					   style={{ width: 200 }}
      					   placeholder="视频级别"
      					   optionFilterProp="children"
      					   onChange={handleChange}
      					   onFocus={handleFocus}
      					   onBlur={handleBlur}
      					   filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      					 >
      					   <Option value="free">免费</Option>
      					   <Option value="consumption">付费</Option>
      					 </Select>
                     )}
                   </Form.Item>
                   <Form.Item {...formItemLayout} label="课程状态">
                     {getFieldDecorator('videostatus', {
                       rules: [{
                         required: true,
                         message: '请选择课程状态',
                       }],
                     })(
      					 <Select
      					   showSearch
      					   style={{ width: 200 }}
      					   placeholder="课程状态"
      					   optionFilterProp="children"
      					   onChange={handleChange}
      					   onFocus={handleFocus}
      					   onBlur={handleBlur}
      					   filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      					 >
      					   <Option value="end">完结</Option>
      					   <Option value="updating">更新中</Option>
      					 </Select>
                     )}
                   </Form.Item>
                   <Form.Item {...formTailLayout}>
                     <Button type="primary" onClick={this.check}>
                      查询 
                     </Button>
                   </Form.Item>
                 </Form>
               </Row>
                   <Divider />
                <Row gutter={16} type="flex" justify="center">
                  <Col span={5}>
   						 <Card
                           style={{ width: 250  }}
   						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
   						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
   						 >
   						   <Meta
   						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
   						     title="Card title"
   						     description="This is the description"
   						   />
   						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                </Row>
                   <Divider />
                <Row gutter={16} type="flex" justify="center">
                  <Col span={5}>
   						 <Card
                           style={{ width: 250  }}
   						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
   						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
   						 >
   						   <Meta
   						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
   						     title="Card title"
   						     description="This is the description"
   						   />
   						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                </Row>
                   <Divider />
                <Row gutter={16} type="flex" justify="center">
                  <Col span={5}>
   						 <Card
                           style={{ width: 250  }}
   						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
   						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
   						 >
   						   <Meta
   						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
   						     title="Card title"
   						     description="This is the description"
   						   />
   						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                  <Col span={5}>
 						 <Card
                           style={{ width: 250  }}
 						   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
 						   actions={[<Icon type="setting" onClick={this.videoclick} />, <Icon type="edit" />, <Icon type="ellipsis" />]}
 						 >
 						   <Meta
 						     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
 						     title="Card title"
 						     description="This is the description"
 						   />
 						 </Card>
                  </Col>
                </Row>
              </div>
		)
	}
}


export { VideoIndex }
