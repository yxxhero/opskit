import React, { Component } from 'react';
import CustomLayout from '../../customlayout/layout' 
import { VideoPlay } from '../../videoplay/videoplay' 

class VideoPlayPage extends Component {

    render(){
        const customcontent = <VideoPlay/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { VideoPlayPage }
