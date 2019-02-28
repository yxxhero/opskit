import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout'; 
import EssayEditForm from '../../component/essay/essayedit'; 

class EssayEditPage extends Component {

    render(){
        const customcontent = <EssayEditForm />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { EssayEditPage }
