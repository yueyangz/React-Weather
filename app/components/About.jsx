var React = require('react');

var About = React.createClass({

	render: function(){
		return (
		<div>
			<h2>About</h2>
			<p>Welcome to React Weather!</p>
			<ul className='row text-center'>
				<li>
					<p>The application utilizes data from OpenWeatherMap.org</p>
					<a href='http://openweathermap.org/'>Open Weather MapAPI</a> 
				</li>
				<li>
					<p>You can also view all the code in my GitHub repo</p>
					<a href='https://github.com/yueyangz/ReactWeather'>GitHub</a> 	
				</li>		
			</ul>
		</div>)
	}
});


module.exports = About;
