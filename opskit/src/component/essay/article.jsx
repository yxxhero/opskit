import React from 'react';
import { connect  } from 'react-redux';
import { Divider, Button, Row, Col, Breadcrumb, List, Avatar } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import { getnotelist, getnoticelist } from '../../redux/notes.redux'
import RecommendIndex from '../recommend/recommend'
import SpreadIndex from '../carousel/carousel'
import { IconText } from '../common/common'


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
        const resourceType = this.props.resourceType ? this.props.resourceType : "Web";
        return(
         <div>
        <Row>
          <Col span={11} offset={1}>
         <Breadcrumb style={{ margin: '16px 0' }}> 
           <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
           <Breadcrumb.Item>{resourceType}</Breadcrumb.Item>
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
                      <SpreadIndex />
                    </Col>
                </Row>
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
