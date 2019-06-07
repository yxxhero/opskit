import React, { Component } from 'react';
import CustomLayout from '@/component/customlayout/layout' 
import Center from '@/component/Account/Center/Center' 

class AccountCenter extends Component {

    render(){
      const customcontent = <Center></Center>;
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { AccountCenter }
