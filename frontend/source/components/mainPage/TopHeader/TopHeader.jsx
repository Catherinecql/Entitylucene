import React, { Component } from 'react';
import './TopHeader.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class TopHeader extends Component {
    render() {
        return (
            <div className="Header">
                <Link to={{pathname:'/entitylucene/'}}>
                    <div className="header">
                        <span>Lucene-based</span>
                        <span className="highlighter"> Entity </span>
                        <span>Search</span>
                    </div>
                </Link>
            </div>
        );
    }
}
export default TopHeader;