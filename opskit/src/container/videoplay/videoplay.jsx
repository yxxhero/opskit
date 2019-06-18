import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { VideoPlay } from '../../component/videoplay/videoplay' 

class VideoPlayPage extends Component {

    render(){
        const customcontent = <VideoPlay/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default VideoPlayPage;
