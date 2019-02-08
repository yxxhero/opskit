import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { ArticleView } from '../../component/essay/articleview' 

class ArticleViewPage extends Component {

    render(){
        const customcontent = <ArticleView/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { ArticleViewPage }
