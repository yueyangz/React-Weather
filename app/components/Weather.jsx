var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({


	getInitialState: function() {
	    return {
			isLoading: false,      
	    };
	},

	handleNewData: function(location){
		var that = this;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		OpenWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location, 
				temp: temp,
				isLoading: false
			});
		}, function(error){
			that.setState({
				isLoading: false,
				errorMessage: error.message
			});
			// alert(error);
		})	
		
	},

	renderError: function(){
		var {errorMessage} = this.state;
		if(typeof errorMessage === 'string') {
			return (
				<ErrorModal message={errorMessage}/>
			)
		}
	},

	conditionalRendering: function(){
		var {isLoading, location, temp} = this.state;
		if (isLoading) {
			return <h3>Fetching temperature...</h3>
		} else if (location && temp) {
			return <WeatherMessage location={location} temp={temp}/>
		} 
	},

	render: function(){
		return (
			<div>		
				<h1 className='text-center page-title'>Weather</h1>
				<WeatherForm onNewData={this.handleNewData}/>
				{this.conditionalRendering()}
				{this.renderError()}
			</div>	
		)
	}
});

module.exports = Weather;
