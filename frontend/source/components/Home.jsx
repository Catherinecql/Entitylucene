import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import PageLayout from './mainPage/PageLayout.jsx'
import Layout from './Welcome/Layout.jsx';


class Home extends Component {

	render(){
		return(
			<Router>
				<div>
					
					<Route path='/entitylucene/' component={PageLayout} />				
				</div>
			</Router>
		)
	}

}

export default Home;