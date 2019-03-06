import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { AdminNoteIndex } from '../../component/admin/essay' 

class AdminNotePage extends Component {

    render(){
        const customcontent = <AdminNoteIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { AdminNotePage }
