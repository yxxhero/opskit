import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout'; 
import EssayCreateForm from '../../component/essay/essaycreate'; 

class EssayCreatePage extends Component {

    render(){
        const customcontent = <EssayCreateForm />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default EssayCreatePage; 
