import React, { Component } from 'react';
import CustomLayout from '@/component/customlayout/layout' 
import Center from '@/component/Account/Center/Center' 
import Articles from '@/component/Account/Center/Articles' 

class AccountCenter extends Component {

    render(){
      const customcontent = <Center><Articles /></Center>;
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { AccountCenter }
