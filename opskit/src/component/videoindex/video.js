import React, { Component } from 'react';
import {Form, Button, Select, Divider} from 'antd';
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

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


@Form.create()
class VideoIndex extends Component {

    componentDidMount () {
		console.log(this.props)	
	} 
    
    check = () => {
        console.log("check");
    }

    render(){
        const { getFieldDecorator  } = this.props.form;
	    return (
                <div style={{ textAlign: 'center', margin: '16px 0' }}>
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
                   <Divider />
              </div>
		)
	}
}


export { VideoIndex }
