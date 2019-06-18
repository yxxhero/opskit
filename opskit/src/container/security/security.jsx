import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class SecurityPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='security' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default SecurityPage; 
