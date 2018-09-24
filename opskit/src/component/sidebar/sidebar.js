import React, { Component } from 'react';
import { Form, Button } from "antd"
import { withRouter } from 'react-router-dom'

const FormItem = Form.Item;

@withRouter
class SideBar extends Component {
  handlelogin = () => {
      this.props.history.push("/login"); 
  }
  render() {
    return (
			 <Form layout="inline" style={{margin: "12px auto", float: "right"}}>
        		<FormItem style={{marginLeft: 16, marginRight: 0}}>
        		  <Button
        		    type="primary"
        		  >
					注册
        		  </Button>
        		</FormItem>  
        		<FormItem style={{marginLeft: 16, marginRight: 0}}>
        		  <Button
        		    type="primary"
			        onClick={this.handlelogin}
        		  >
					登录
        		  </Button>
        		</FormItem>  
			 </Form>
    );
  }
}

export default SideBar;
