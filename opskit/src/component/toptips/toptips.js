import React, { Component } from 'react';
import './toptips.css'
import { Popover, Divider } from 'antd';
import qrcode from '../../style/img/qrcode.jpg';


class TopTips extends Component {

    render(){
      const content = (
          <img src={qrcode} alt="" style={{width: 150}}/>
      )
	    return (
		<div className="toptips">
		    <div className="block">
				<div style={{color: "white", display: "inline-block"}}>
			        专注于运维垂直 运维自动化 更好的解决运维问题 服务运维人员	
		        </div>
                <div style={{float: "right", color: "white"}}>
                  <Popover content={content}>
                      干货不断
                      <Divider type="vertical" />
                      关注公众号
                  </Popover>
                </div>
		    </div>
		</div>
		)
	
	}

}


export { TopTips }
