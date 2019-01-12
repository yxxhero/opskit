import React from 'react';
import { Button, Card, Row, Col, Breadcrumb, List, Avatar, Icon } from 'antd';
import { withRouter } from 'react-router-dom'

const { Meta } = Card;
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

@withRouter
class WebIndex extends React.Component {

    handleEssayClick = () => {
      this.props.history.push("/essay");
    }

    render(){
        return(
         <div>
        <Row>
          <Col span={12}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>Web</Breadcrumb.Item>
         </Breadcrumb>
       </Col>
       <Col span={2} offset={10}>
         <Button onClick={this.handleEssayClick} type="primary" icon="edit"  style={{margin: "10px 0px", float: 'right'}}>发表帖子</Button>
       </Col>
       </Row>
           <Row gutter={32}>
				<Col span={19}>
        	<List
            itemLayout="vertical"
            bordered={true}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                style={{background: "white"}}
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img width={250} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
            </Col>
            <Col span={5}>
				<Row>
                 <Col span={24}>
                <Card
                  style={{ width: "100%" }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="web资深运维"
                    description="web就是我的使命"
                  />
                </Card>
                 </Col>
				</Row>
				<br />
				<Row>
                 <Col span={24}>
            <List
              header="热门文章"
              itemLayout="horizontal"
              dataSource={data}
              bordered={true}
              renderItem={item => (
                <List.Item 
	    	    style={{background: "white"}}
			    >
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
             </Col>
			</Row>
            </Col>
          </Row>
         </div>
		)
    }
}
export default WebIndex
