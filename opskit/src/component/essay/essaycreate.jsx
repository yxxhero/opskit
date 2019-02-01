import React, { Component } from 'react';
import { CustomUploadFn } from '../../util/tools_helper';
import 'braft-editor/dist/index.css';
import { withRouter  } from 'react-router-dom'
import BraftEditor from 'braft-editor'
import { Select, Form, Input, Button, Row, Col  } from 'antd'
import './essaycreate.css'

const FormItem = Form.Item;
const Option = Select.Option;


@withRouter
@Form.create()
class EssayCreateForm extends Component {

  componentDidMount () {

    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        content: BraftEditor.createEditorState()
      })
    }, 1000)

  }

  handleSubmit = (event) => {

    event.preventDefault()

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          title: values.title,
          raw_content: values.content.toRAW(), 
          content: values.content.toHTML()
        }
        console.log(submitData)
      }
    })

  }

  render () {
    const formItemLayout = {
          labelCol: { span: 3 },
          wrapperCol: { span: 21 }
    };

    const { getFieldDecorator } = this.props.form;
    const controls = [
            'undo', 'redo', 'separator',
            'font-size', 'line-height', 'letter-spacing', 'separator',
            'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
            'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 'text-indent', 'text-align', 'separator',
            'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
            'link', 'separator', 'hr', 'separator',
            'media', 'separator',
            'clear'
    ];

    return (
        <Row>
          <Col span={20} offset={2}>
              <div className="form-essay">
                  <Form onSubmit={this.handleSubmit} hideRequiredMark>
                      <Row gutter={16}>
                          <Col span={12}>
                              <FormItem {...formItemLayout} label="文章标题">
                                {getFieldDecorator('title', {
                                  rules: [{
                                    required: true,
                                    message: '请输入标题',
                                  }],
                                })(
                                <Input size="large" placeholder="请输入标题"/>
                                )}
                              </FormItem>
                          </Col>
                          <Col span={12}>
                              <FormItem {...formItemLayout} label="文章类型">
                                {getFieldDecorator('note_type', {
                                  rules: [{
                                    required: true,
                                    message: '请输入类别',
                                  }],
                                })(
                                  <Select
                                    size="large"
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="请输入文章类型"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                  >
                                    <Option value="web">Web服务</Option>
                                    <Option value="data	">数据库</Option>
                                    <Option value="docker">容器</Option>
                                    <Option value="security">安全</Option>
                                  </Select>
                                )}
                              </FormItem>
                          </Col>
                      </Row>
                      <Row>
                          <Col span={24}>
                             <FormItem label="">
                               {getFieldDecorator('content', {
                                 validateTrigger: 'onBlur',
                                 rules: [{
                                   required: true,
                                   validator: (_, value, callback) => {
                                     if (value.isEmpty()) {
                                       callback('请输入正文内容')
                                     } else {
                                       callback()
                                     }
                                   }
                                 }],
                               })(
                                 <BraftEditor
                                   className="essay-editor"
                                   placeholder="请输入正文内容"
                                   controls={controls}
                                   media={{uploadFn: CustomUploadFn}}
                                 />
                               )}
                             </FormItem>
                             <FormItem style={{float: "right"}}>
                               <Button size="large" type="primary" htmlType="submit">提交</Button>
                             </FormItem>
                             <div style={{clear: "both"}}></div>
                          </Col>
                     </Row>
                 </Form>
              </div>
           </Col>
      </Row>
    )

  }

}

export default EssayCreateForm;
