import React, { Component } from 'react';
import CustomLayout from '../../customlayout/layout' 
import WebIndex from '../../web/web' 

class WebPage extends Component {

    render(){
        const customcontent = <WebIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { WebPage }
