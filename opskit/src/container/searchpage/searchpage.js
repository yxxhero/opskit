import React, { Component } from 'react';
import CustomLayout from '../../component/customlayout/layout' 
import { SearchIndex } from '../../component/search/search' 

class SearchPage extends Component {

    render(){
        const customcontent = <SearchIndex/>
	    return (
				<CustomLayout CustomContent={customcontent}>
				</CustomLayout>

		)
	}
}


export { SearchPage }
