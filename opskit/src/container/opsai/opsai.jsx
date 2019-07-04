import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class OpsAiPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='opsai' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default OpsAiPage;
