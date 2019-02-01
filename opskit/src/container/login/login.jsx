import React from 'react';
import { connect  } from 'react-redux';
import { login } from '../../redux/user.redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less'
import logo from '../../style/img/logo.png'

const FormItem = Form.Item;

@Form.create()
@connect(
  state => state.user,
  {login}
)
class LoginPage extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
               this.props.login(values.userName, values.password);
            }
        });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
							 <img src={logo} alt="" style={{width: 230}}/>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px', marginTop:50}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账户" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
}
}

export default LoginPage
