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
				It is {temp} degrees in {location}
			</div>
		)
	}
});

module.exports = WeatherMessage;