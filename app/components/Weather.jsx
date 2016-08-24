var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({


	getInitialState: function() {
	    return {
			isLoading: false      
	    };
	},

	handleNewData: function(location){
		var that = this;
		this.setState({isLoading: true});
		OpenWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location, 
				temp: temp,
				isLoading: false
			});
		}, function(error){
			that.setState({isLoading: false});
			alert(error);
		})	
		
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
				<h2>Weather</h2>
				<WeatherForm onNewData={this.handleNewData}/>
				{this.conditionalRendering()}
			</div>	
		)
	}
});

module.exports = Weather;
