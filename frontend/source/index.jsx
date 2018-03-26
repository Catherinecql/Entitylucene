import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import Home from './components/Home.jsx';

require('./styles/main.scss');

render(
    <Home />,
    document.getElementById('app')
);
