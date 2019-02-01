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
    constructor () {
      super()
      this.state = { 
        card_list : [
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "1", "video_id": "11"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "2", "video_id": "12"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "3", "video_id": "13"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "4", "video_id": "14"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "5", "video_id": "15"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "6", "video_id": "16"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "7", "video_id": "17"},
          {"title": "example", "img_src": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "avatar_src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", "key": "8", "video_id": "18"},
        ]
      }
        
    }

    componentDidMount () {
		console.log(this.props)	
	} 
    
    check = () => {
        console.log("check");
    }
    
    handleVideoClick = (video_id) => {
          this.props.history.push(["/videoplay/", video_id].join(""));
    }

    render(){
      const { getFieldDecorator  } = this.props.form;
      const card_list = this.state.card_list;
      let video_card_list = []; 
      let card_list_len = this.state.card_list.length;
      if(card_list_len){
        let card_list_mod = card_list_len % 4;
        let card_list_consult = parseInt(card_list_len/4, 10);
            let key_num = 1;
            for ( let item in [...Array(card_list_consult).keys()]){
              video_card_list.push(
              <Row gutter={16} type="flex" justify="center" key={key_num}>
                <Col span={5} key={card_list[item * 4]["video_id"]}>
 	                  	 <Card
                           style={{ width: 250  }}
                           cover={<img alt={card_list[item * 4]["title"]} src={card_list[item * 4]["img_src"]} style={{cursor:"pointer"}} onClick={() => {this.handleVideoClick("")}}/>}
 	                  	   actions={[<Icon type="like" />, <Icon type="message" />]}
 	                  	 >
 	                  	   <Meta
 	                  	     avatar={<Avatar src={card_list[item * 4]["avatar_src"]} />}
 	                  	     title="Card title"
 	                  	     description="This is the description"
 	                  	   />
 	                  	 </Card>
               </Col>
                <Col span={5} key={card_list[item * 4 + 1]["video_id"]}>
 	                  	 <Card
                             style={{ width: 250  }}
 	                  	   cover={<img alt={card_list[item * 4 + 1]["title"]} src={card_list[item * 4 + 1]["img_src"]} style={{cursor:"pointer"}} onClick={() => {this.handleVideoClick("")}}/>}
 	                  	   actions={[<Icon type="like" />, <Icon type="message" />]}
 	                  	 >
 	                  	   <Meta
 	                  	     avatar={<Avatar src={card_list[item * 4 + 1]["avatar_src"]} />}
 	                  	     title="Card title"
 	                  	     description="This is the description"
 	                  	   />
 	                  	 </Card>
               </Col>
                <Col span={5} key={card_list[item * 4 + 2]["video_id"]}>
 	                  	 <Card
                             style={{ width: 250  }}
 	                  	   cover={<img alt={card_list[item * 4 + 2]["title"]} src={card_list[item * 4 + 2 ]["img_src"]} style={{cursor:"pointer"}} onClick={() => {this.handleVideoClick("")}}/>}
 	                  	   actions={[<Icon type="like" />, <Icon type="message" />]}
 	                  	 >
 	                  	   <Meta
 	                  	     avatar={<Avatar src={card_list[item * 4 + 2]["avatar_src"]} />}
 	                  	     title="Card title"
 	                  	     description="This is the description"
 	                  	   />
 	                  	 </Card>
               </Col>
                <Col span={5} key={card_list[item * 4 + 3]["video_id"]}>
 	                  	 <Card
                             style={{ width: 250  }}
 	                  	   cover={<img alt={card_list[item * 4 + 3]["title"]} src={card_list[item * 4 + 3]["img_src"]} style={{cursor:"pointer"}} onClick={() => {this.handleVideoClick("")}}/>}
 	                  	   actions={[<Icon type="like" />, <Icon type="message" />]}
 	                  	 >
 	                  	   <Meta
 	                  	     avatar={<Avatar src={card_list[item * 4 + 3]["avatar_src"]} />}
 	                  	     title="Card title"
 	                  	     description="This is the description"
 	                  	   />
 	                  	 </Card>
               </Col>
               </Row>
             )
              video_card_list.push(
                   <Divider key={"divider" + key_num}/>
              )
            key_num +=1;
            }
if(card_list_mod){
            let col_list = [];
            for ( let item in [...Array(card_list_mod).keys()]){
              col_list.push(
                <Col span={5} key={card_list[item]["video_id"]}>
 	                  	 <Card
                             style={{ width: 250  }}
 	                  	   cover={<img alt={card_list[item]["title"]} src={card_list[item]["img_src"]} style={{cursor:"pointer"}} onClick={() => {this.handleVideoClick("")}}/>}
 	                  	   actions={[<Icon type="like" />, <Icon type="message" />]}
 	                  	 >
 	                  	   <Meta
 	                  	     avatar={<Avatar src={card_list[item]["avatar_src"]} />}
 	                  	     title="Card title"
 	                  	     description="This is the description"
 	                  	   />
 	                  	 </Card>
               </Col>
             )
            }
          video_card_list.push(
              <Row gutter={16} type="flex" justify="center" key={key_num + 1}>
                {col_list}
               </Row>
          )
video_card_list.push(
              <Divider key={"divider" + key_num}/>
         )

}
}

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
                    {video_card_list}
              </div>
		)
	}
}


export { VideoIndex }
