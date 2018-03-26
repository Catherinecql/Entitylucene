import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react';
import styles from './Layout.scss';
import Header from './Header/Header.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


class Layout extends Component {
	constructor(props) {
		super(props);
	
	}

	render() {
		return (
			<div className="Layout">
					<Container className = "content">
			 			<div className="section"><Header/></div>
			 			<div className="section"><SearchBar/></div>
			 		</Container>
			 </div>
		);
	}
}

export default Layout;
