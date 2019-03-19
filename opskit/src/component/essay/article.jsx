import React from 'react';
import { connect  } from 'react-redux';
import { Divider, Button, Card, Row, Col, Breadcrumb, List, Avatar, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import { getnotelist, getnoticelist } from '../../redux/notes.redux'
import RecommendIndex from '../recommend/recommend'
import { IconText } from '../common/common'


const { Meta } = Card;

@withRouter
@connect(
  state => state.notes,
  {getnotelist, getnoticelist}
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
      this.props.getnoticelist()
    }

    render(){
        const { notelist, loading, noticelist, noticeloading } = this.props;
        const essaytype = this.props.essaytype ? this.props.essaytype : "Web";
        return(
         <div>
        <Row>
          <Col span={11} offset={1}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item>首页</Breadcrumb.Item>
           <Breadcrumb.Item>{essaytype}</Breadcrumb.Item>
         </Breadcrumb>
       </Col>
       <Col span={2} offset={9}>
         <Button onClick={this.handleEssayClick} type="primary" icon="edit"  style={{margin: "10px 0px", float: 'right'}}>发表帖子</Button>
       </Col>
       </Row>
           <Row gutter={32}>
             <Col span={16} offset={1}>
               <Row>
                 <Col span={24}>
                       <List
                        header="公告"
                        bordered={true}
                        loading={noticeloading}
                        locale={{emptyText: "暂无公告"}}
                        dataSource={noticelist}
                        renderItem={item => (
                          <List.Item
                            style={{background: "white"}}
                            key={item.title}
                            actions={[<IconText type="eye-o" text={item.view_count} />, <IconText type="message" text={item.comment_count} />]}
                          >
                            <List.Item.Meta
                              avatar={<Avatar style={{ verticalAlign: 'middle'  }} src={item.useravatar} />}
                              title={<a href={item.href}>{item.title}</a>}
                            />
                          </List.Item>
                        )}
                       />
                 </Col>
                 <Divider dashed />
                 <Col span={24}>
                   <List
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
                        actions={[<IconText type="eye-o" text={item.view_count} />, <IconText type="message" text={item.comment_count} />]}
                      >
                        <List.Item.Meta
                          avatar={<Avatar style={{ verticalAlign: 'middle'  }} src={item.useravatar} />}
                          title={<a href={item.href}>{item.title}</a>}
                        />
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
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
                   <RecommendIndex />
             </Col>
			</Row>
            </Col>
          </Row>
         </div>
		)
    }
}
export default ArticleIndex
