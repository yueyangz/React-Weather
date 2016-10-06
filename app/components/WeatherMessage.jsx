var React = require('react');

var WeatherMessage = React.createClass({
	getDefaultProps: function() {
	    return {
	        temp: "Empty temperature"  
	    };
	},

	render: function(){
		var{temp, location, description} = this.props;
		return(
			<div>
				<p className='text-center'>It is {temp} degrees in {location}, and there will be {description}</p>
			</div>
		)
	}
});

module.exports = WeatherMessage;