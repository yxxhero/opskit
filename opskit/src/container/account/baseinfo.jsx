import React, { Component } from 'react';
import CustomLayout from '@/component/customlayout/layout' 
import BaseView from '@/component/Account/Settings/BaseView' 
import Info from '@/component/Account/Settings/Info' 

class AccountSettingBase extends Component {

    render(){
      const customcontent = <Info><BaseView /></Info>;
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export default AccountSettingBase;
