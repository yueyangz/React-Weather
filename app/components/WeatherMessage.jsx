var React = require('react');

var WeatherMessage = React.createClass({
	getDefaultProps: function() {
	    return {
	        temp: "Empty temperature"  
	    };
	},

	render: function(){
		var{temp, location} = this.props
		return(
			<div>
				<p className='text-center'>It is {temp} degrees in {location}</p>
			</div>
		)
	}
});

module.exports = WeatherMessage;