import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './register.less'
import logo from '../../../style/img/logo.png'

const FormItem = Form.Item;

@Form.create()
class RegisterPage extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
                            {getFieldDecorator('confirmpassword', {
                                rules: [{ required: true, message: '请输入确认密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="确认密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('email', {
									rules: [{ required: true, message: '请输入正确的邮箱格式!' }, {type: 'email', message: '请输入正确的邮箱地址!'}],
                            })(
                                <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="邮箱" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                               注册 
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    }
}

export default RegisterPage 
