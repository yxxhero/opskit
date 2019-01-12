import React, { Component } from 'react';
import 'braft-editor/dist/index.css';
import { withRouter  } from 'react-router-dom'
import BraftEditor from 'braft-editor'
import { Form, Input, Button, Row, Col  } from 'antd'
import './essay.css'

const FormItem = Form.Item;


@withRouter
@Form.create()
class EssayForm extends Component {

  componentDidMount () {

    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
      })
    }, 1000)

  }

  handleSubmit = (event) => {

    event.preventDefault()

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          title: values.title,
          content: values.content.toRAW() // or values.content.toHTML()
        }
        console.log(submitData)
      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form

    return (
        <Row>
          <Col span={16} offset={4}>
      <div className="form-essay">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="">
            {getFieldDecorator('title', {
              rules: [{
                required: true,
                message: '请输入标题',
              }],
            })(
            <Input addonBefore="文章标题" size="large" placeholder="请输入标题"/>
            )}
          </FormItem>
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
              />
            )}
          </FormItem>
          <FormItem style={{float: "right"}}>
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </FormItem>
          <div style={{clear: "both"}}></div>
        </Form>
      </div>
          </Col>
        </Row>
    )

  }

}

export default EssayForm;
