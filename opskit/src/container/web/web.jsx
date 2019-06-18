import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class WebPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='web' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default WebPage;
