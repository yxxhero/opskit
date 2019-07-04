import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class OpsBasePage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='opsbase' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default OpsBasePage;
