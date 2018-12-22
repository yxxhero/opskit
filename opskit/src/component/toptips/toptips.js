import React, { Component } from 'react';
import './toptips.css'
import { Divider } from 'antd';

class TopTips extends Component {

    render(){
	    return (
		<div className="toptips">
		    <div className="block">
				<div style={{color: "white", display: "inline-block"}}>
			        专注于运维垂直 运维自动化 更好的解决运维问题 服务运维人员	
		        </div>
                <div style={{float: "right", color: "white"}}>
                  添加qq群
                  <Divider type="vertical" />
                  关注公众号
                </div>
		    </div>
		</div>
		)
	
	}

}


export { TopTips }
