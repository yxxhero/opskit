import React from 'react';
import { Carousel } from 'antd';


const aliyun_image_url = 'https://www.aiopsclub.com/carousels/aliyun.png';
const aliyun_spread_url = 'https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=j8z36i0z';

const txyun_image_url = 'https://www.aiopsclub.com/carousels/txyun.jpg';
const txyun_spread_url = 'https://cloud.tencent.com/redirect.php?redirect=1001&cps_key=885ada6cc9b3fe7ea4249b74e5205346&from=console';
class SpreadIndex extends React.Component { 

    componentDidMount () {
      console.log(this.props);
    }

    render(){
      return (
          <Carousel autoplay>
            <div>
              <a href={aliyun_spread_url} target="_Blank">
                <img style={{width: '100%'}} alt='' src={aliyun_image_url}>
                </img>
             </a>
         </div>
            <div>
              <a href={txyun_spread_url} target="_Blank">
                <img style={{width: '100%'}} alt='' src={txyun_image_url}>
                </img>
             </a>
         </div>
          </Carousel>
          )
  }
}

export default SpreadIndex;
