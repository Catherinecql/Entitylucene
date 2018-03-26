import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Grid, Container} from 'semantic-ui-react';
import styles from './PageLayout.scss';
import TopHeader from './TopHeader/TopHeader.jsx';
import Search from './SearchArea/SearchArea.jsx';
// import SearchResult from './searchResult/searchResult.jsx';
import Cluster from './Cluster/Cluster.jsx';
import 'semantic-ui-css/semantic.min.css';

class PageLayout extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state ={
	// 		profile:[], //Curent shown detail useraccount
	// 	}
	// 	this.changeCurProfile = this.changeCurProfile.bind(this);
	// }

	// changeCurProfile(value){
	// 	this.setState({
	// 		profile:value
	// 	});
	// }

	render() {

		return (
			<div className="PageLayout">
					<Container className = "">
						<div className="section"><TopHeader/></div>
			 			<div className="section">
			 				<Search/>
			 			</div>
			 		</Container>
				</div>
		);
	}
}

export default PageLayout;
