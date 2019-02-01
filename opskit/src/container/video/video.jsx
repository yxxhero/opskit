import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { VideoIndex } from '../../component/videoindex/video' 

class VideoPage extends Component {

    render(){
        const customcontent = <VideoIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { VideoPage }
