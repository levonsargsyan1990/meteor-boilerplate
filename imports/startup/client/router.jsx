import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//importing main layouts, pages, components
//		import MainLayoutName from '../../ui/layouts/main/';
//		import MainPageName from '../../ui/pages/main/';
//		import MainComponentName from '../../ui/components/main/';

//importing admin layouts, pages, components
//		import AdminLayoutName from '../../ui/layouts/admin/';
//		import AdminPageName from '../../ui/pages/admin/';
//		import AdminComponentName from '../../ui/components/admin/';

//importing other layouts, pages, components
//		import OtherLayoutName from '../../ui/layouts/other/';
//		import OtherPageName from '../../ui/pages/other/';
//		import OtherComponentName from '../../ui/components/other/';

let Routes = ()=>(
	<Router history={browserHistory} >
	//Add main routes here
		//<Route path='/' component={MainLayoutName}>
     	//    <IndexRoute component={MainPageName}/>
     	//    <Route path='/page' component={MainPageName}/>
    	//</Route>

	//Add admin routes here
		//<Route path='/admin' component={AdminLayoutName}>
     	//    <IndexRoute component={AdminPageName}/>
     	//    <Route path='/admin/page' component={AdminPageName}/>
    	//</Route>

	//Add other routes here
		//

    </Router>	
);

let hooks = {
	//Add router hooks as properties
}

Meteor.startup(function() {
    render(<Routes/>, document.getElementById('app'));
});