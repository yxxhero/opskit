import React from 'react';
import { connect  } from 'react-redux';
import { List, Avatar } from 'antd';
import { getrecommendlist } from '../../redux/recommend.redux'
import { IconText } from '../common/common'
import { cutstr } from '../../util/util'

@connect(
  state => state.recommend,
  {getrecommendlist}
)
class RecommendIndex extends React.Component { 

    componentDidMount () {
      this.props.getrecommendlist()
    }
    render(){
      return (
            <List
              header="热门文章"
              itemLayout="horizontal"
              dataSource={this.props.recommendlist}
	    	  style={{background: "white"}}
              bordered={true}
              renderItem={item => (
                <List.Item 
	    	    style={{background: "white"}}
			    >
                  <List.Item.Meta
                    avatar={<Avatar src={item.useravatar} />}
                    title={<a href={item.href}>{cutstr(item.title, 22)}</a>}
                  />
                  <IconText type="eye-o" text={item.view_count} />
                </List.Item>
              )}
            />
          )
  }
}

export default RecommendIndex;
