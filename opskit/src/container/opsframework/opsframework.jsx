import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class OpsFrameworkPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='opsframework' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default OpsFrameworkPage;
