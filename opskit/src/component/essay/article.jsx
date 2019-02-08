import React from 'react';
import { connect  } from 'react-redux';
import { Button, Card, Row, Col, Breadcrumb, List, Avatar, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import { getnotelist } from '../../redux/notes.redux'


const { Meta } = Card;

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
@connect(
  state => state.notes,
  {getnotelist}
)
class ArticleIndex extends React.Component {
    state = {
      pagesize: 10
    };

    handleEssayClick = () => {
      this.props.history.push("/essay/add/");
    }

    componentDidMount () {
      this.props.getnotelist({note_type: this.props.resourceType})
    }

    render(){
        const { notelist, loading } = this.props;
        return(
         <div>
        <Row>
          <Col span={11} offset={1}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>Web</Breadcrumb.Item>
         </Breadcrumb>
       </Col>
       <Col span={2} offset={9}>
         <Button onClick={this.handleEssayClick} type="primary" icon="edit"  style={{margin: "10px 0px", float: 'right'}}>发表帖子</Button>
       </Col>
       </Row>
           <Row gutter={32}>
				<Col span={16} offset={1}>
        	<List
            itemLayout="vertical"
            bordered={true}
            loading={loading}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: this.state.pagesize,
              total: notelist.length, 
              onShowSizeChange: (current, size) => {this.setState({ pagesize: size })},
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: total => `总共 ${total} 条经验`
            }}
            dataSource={notelist}
            renderItem={item => (
              <List.Item
                style={{background: "white"}}
                key={item.title}
                actions={[<IconText type="eye-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  avatar={<Avatar style={{ verticalAlign: 'middle'  }} src={item.useravatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                />
              </List.Item>
            )}
          />
            </Col>
            <Col span={6}>
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
export default ArticleIndex
