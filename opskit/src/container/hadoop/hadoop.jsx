import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import ArticleIndex from '../../component/essay/article' 

class HadoopPage extends Component {

    render(){
        const customcontent = <ArticleIndex resourceType='hadoop' />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { HadoopPage }
