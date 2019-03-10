import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { AdminCommentIndex } from '../../component/admin/comment' 

class AdminCommentPage extends Component {

    render(){
        const customcontent = <AdminCommentIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { AdminCommentPage }
