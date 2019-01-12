import React, { Component } from 'react';
import CustomLayout from '../../customlayout/layout'; 
import EssayForm from '../../essay/essay'; 

class EssayPage extends Component {

    render(){
        const customcontent = <EssayForm />
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { EssayPage }
