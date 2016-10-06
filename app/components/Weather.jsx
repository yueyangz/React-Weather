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
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		OpenWeatherMap.getTemp(location).then(function(data){
			var temperature = data.main.temp;
			var location = data.name;
			var description = data.weather[0].description;
			that.setState({
				location: location, 
				temp: temperature,
				description: description,
				isLoading: false
			});
		}, function(error){
			var msg = error.message || `Oops! What is ${location}?`;
			that.setState({
				isLoading: false,
				errorMessage: msg
			});
			// alert(error);
		})	
		
	},

	componentDidMount: function() {
		var location = this.props.location.query.location;
		if (location && location.length > 0) {
			this.handleNewData(location);
			window.location.hash = "#/"
		}  
	},

	//React doesn't know 
	componentWillReceiveProps: function(newProps) {
		var location = newProps.location.query.location;
		if (location && location.length > 0) {
			this.handleNewData(location);
			window.location.hash = "#/"
		}     
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
		var {isLoading, location, temp, description} = this.state;
		if (isLoading) {
			return <h3>Fetching temperature...</h3>
		} else if (location && temp) {
			return <WeatherMessage location={location} temp={temp} description={description}/>
		} 
	},

	render: function(){
		return (
			<div>		
				<h1 className='text-center page-title'>Weather Inquiry</h1>
				<h5 className='text-center'>Only English supported currently</h5>
				<WeatherForm onNewData={this.handleNewData}/>
				{this.conditionalRendering()}
				{this.renderError()}
			</div>	
		)
	}
});

module.exports = Weather;
