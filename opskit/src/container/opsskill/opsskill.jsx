import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class OpsSkillPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='opsskill' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default OpsSkillPage;
