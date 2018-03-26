import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import _ from 'lodash'
import styles from './SearchBar.scss';
import { Button, Icon, Input,Select,Form,Radio,Grid, Search, Modal, Header,Action } from 'semantic-ui-react'
// import SearchList from './SearchList.jsx' 
import ReactScrollableList from 'react-scrollable-list'
import axios from 'axios'
// import SearchBar from 'react-click-outside'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state ={
			
			isLoading: false,
			value: '',
			results: [],
			isVisible: false,
			open:false,
			addLabels: [],
			active: [],
			addName:'',
			email: '',
			accountInfoDetail: {},
			categories: []
		}
		this.handleResultSelect = this.handleResultSelect.bind(this);
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
		this.resetComponent = this.resetComponent.bind(this);
		this.baseUrl = 'http://localhost:9200/entity_lucene/_search_with_clusters?pretty=true';
		this.searchClickHandler = this.searchClickHandler.bind(this);
		// this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}
	componentWillMount() {
		document.addEventListener('click', this.handleOutsideClick, false);
		this.resetComponent()
	}

	// handleOutsideClick(event){
	// 	if(!ReactDOM.findDOMNode(this).contains(event.target)) {
	// 		this.setState({
	// 			isVisible:false
	// 		})
	
	// 	console.log("OUTSIDE!!!!")
	// 	}
	
	// }


	resetComponent(){
		this.setState({ isLoading: false, results: [], value: '' })
	}

	handleResultSelect(event, { result }){
		console.log(result)
		this.setState({ 
			value: result.title
		})
	}

	inputChangeHandler(event){
		console.log(event.target.value)

		this.setState({
			results:[],
			addName:event.target.value
		})
		if(event.target.value == ''){
			this.setState({
				isVisible:false
			})
		}else{
			this.setState({
				isVisible:true
			})
		}
		event.preventDefault();

		
	}



	searchClickHandler(event,{value}){
		let account_detail = this.state.results[value].twitter;
		console.log("testing",this.state.results[value].twitter);
		this.setState({
				isVisible:false
		})
	}


   	render(){
   		const { isLoading, value, results,addLabels } = this.state
   		let query_string = this.state.addName;
   		// console.log(results);
   		console.log(this.state.results.length)
   		if(this.state.results.length == 0){
   			this.state.results[0] = "No result found yet!"
   		};
   		

		return(

			
				<div className="SearchBar">
			     	<div className ="ui icon action input"> 
			     		
						<input className="prompt" type='text' placeholder='Search...' onChange={this.inputChangeHandler} ></input>
						
							<button className="ui icon button" role="button">
								<Link to={{pathname:'/entitylucene/query/'}}>

								<i aria-hidden="true" className="search icon"></i>
								</Link>

							</button>
			
					</div>
				</div>
				

		
		)
	
  	}
}
export default SearchBar;
// <Link to={{pathname:'/entitylucene/query/'+query_string}}>




