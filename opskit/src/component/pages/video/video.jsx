import React, { Component } from 'react';
import CustomLayout from '../../customlayout/layout' 
import { VideoIndex } from '../../videoindex/video' 

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
