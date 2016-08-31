
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Route = require('react-route').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

//Load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!applicationStyles')

ReactDOM.render(
	// <h1>Boilerplate app!</h1>,
	<Router history={hashHistory}> 
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<IndexRoute component={Weather}/>
		</Route>	 
	</Router>,
	document.getElementById("my_application")	
);
