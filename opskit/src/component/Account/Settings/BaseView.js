import React, { Component, Fragment } from 'react';
import { Form, Input, Upload, Button, Skeleton, message } from 'antd';
import { connect  } from 'react-redux';
import { putAjax } from '../../../util/axios';
import { uploadProps } from '../../../util/tools_helper';
import { getuserinfo } from '../../../redux/userinfo.redux'
import './BaseView.less';

const FormItem = Form.Item;

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }) => (
  <Fragment>
    <div className='avatar_title'>
      头像
    </div>
    <div className='avatar'>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload 
       {...uploadProps}
    >
      <div className='button_view'>
        <Button icon="upload">
          更换头像
        </Button>
      </div>
    </Upload>
  </Fragment>
);


@connect(
  state => state.userinfo,
  {getuserinfo}
)
@Form.create()
class BaseView extends Component {

  getViewDom = ref => {
    this.view = ref;
  };

  getAvatar = () => {
    const { useravatar } = this.props;
    if (useravatar){
      return useravatar;
    }
    return "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";
  }

  componentDidMount() {
     this.props.getuserinfo();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const _that = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
      putAjax('/resource/userinfo',{useremail: values.email, userdescription: values.profile },
        function(response){
            console.log(response);
            message.success("信息更新成功")
            _that.props.getuserinfo();
        }
      )

      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const {
      useremail, userinfoloading, userdescription
    } = this.props;
    return (
      <div className='baseView' ref={this.getViewDom}>
       <Skeleton loading={userinfoloading} active title={false}>
        <div className='left'>
          <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem label="邮箱">
              {getFieldDecorator('email', {
                initialValue: useremail,
                rules: [
                  {
                    required: true,
                    message: "邮箱不能为空",
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="个人简介">
              {getFieldDecorator('profile', {
                initialValue: userdescription,
                rules: [
                  {
                    required: true,
                    message: "个人简介不能为空" 
                  },
                ],
              })(
                <Input.TextArea
                  placeholder="个人简介"
                  rows={4}
                />
              )}
            </FormItem>
            <Button type="primary" htmlType="submit">
              更新基本信息
            </Button>
          </Form>
        </div>
        <div className='right'>
          <AvatarView avatar={this.getAvatar()} />
        </div>
        </Skeleton>
      </div>
    );
  }
}

export default BaseView;
