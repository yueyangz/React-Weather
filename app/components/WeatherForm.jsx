var React = require('react');

var WeatherForm = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		var city = this.refs.city.value;
		if (city.length > 0){
			this.refs.city.value = '';
			this.props.onNewData(city);
		}
	},


	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<input type="text" ref="city" placeholder="Enter a city here"/>
				</div>
				<div>	
					<button>Get Weather</button>
				</div>	
			</form>
		)
	}
});

module.exports = WeatherForm;
