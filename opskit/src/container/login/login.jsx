import React from 'react';
import { connect  } from 'react-redux';
import { login } from '../../redux/user.redux'
import { withRouter } from 'react-router-dom'
import { instanceOf  } from 'prop-types';
import { Divider, Form, Icon, Input, Button, Checkbox } from 'antd';
import { withCookies, Cookies } from 'react-cookie';
import './login.less'
import logo from '../../style/img/logo.png'

const FormItem = Form.Item;

@Form.create()
@withRouter
@withCookies
@connect(
  state => state.user,
  {login}
)
class LoginPage extends React.Component {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    }; 
    constructor(props) {
      super(props);
 
      this.state = {
        username: '',
        password: ''
      };
    }

    componentDidMount () {
        const { cookies } = this.props;
        if (cookies.get('loginInfo')){
            this.setState({username: cookies.get('loginInfo').username, password: cookies.get('loginInfo').password });
        }
 
    } 
    handleLogoClick = () => {
      this.props.history.push("/");
    }

    handleSubmit = (e) => {
        const { cookies } = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              if (values.remember){
                 cookies.set('loginInfo', {username: values.userName, password: values.password});
              }else{
                 cookies.remove('loginInfo');
              }
              this.props.login(values.userName, values.password);
            }
        });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                  <div className="login-logo" onClick={() => this.handleLogoClick()}>
                      <img src={logo} alt="" style={{width: 230}} />
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px', marginTop:50}}>
                        <FormItem>
                            {getFieldDecorator('userName', {initialValue: this.state.username,
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账户" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {initialValue: this.state.password,
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <span style={{float: 'right'}}>
                              <a className="login-form-forgot" href="">忘记密码</a>
                              <Divider type="vertical" />
                              <a className="login-form-forgot" href="/register">注册</a>
                            </span>
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
