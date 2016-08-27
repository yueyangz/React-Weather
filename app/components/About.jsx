var React = require('react');

var About = React.createClass({

	render: function(){
		return (
		<div>
			<h2>About</h2>
			<p>Welcome to React Weather!</p>
			<ul className='text-center'>
				<li>
					<p>The application utilizes data from OpenWeatherMap.org</p>
					<Link to='http://openweathermap.org/'>Open Weather MapAPI</Link> 
				</li>
				<li>
					<p>You can also view all the code in my GitHub repo</p>
					<Link to='https://github.com/yueyangz/ReactWeather'>GitHub</Link> 	
				</li>		
			</ul>
		</div>)
	}
});


module.exports = About;
