var React = require('react');

// var WeatherMessage = React.createClass({
// 	getDefaultProps: function() {
// 	    return {
// 	        temp: "Empty temperature"  
// 	    };
// 	},

// 	render: function(){
// 		return(
// 			<div>
// 				{this.props.temp}
// 			</div>
// 		)
// 	}
// });

var WeatherMessage = ({temp, location}) => {
	return(
			<div>
				It is {temp} in {location}
			</div>
		)
};

module.exports = WeatherMessage;