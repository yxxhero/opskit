import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { AdminUserIndex } from '../../component/admin/user' 

class AdminUserPage extends Component {

    render(){
        const customcontent = <AdminUserIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { AdminUserPage }
