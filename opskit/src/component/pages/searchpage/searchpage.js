import React, { Component } from 'react';
import CustomLayout from '../../customlayout/layout' 
import { SearchIndex } from '../../search/search' 

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
