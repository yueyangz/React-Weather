var React = require('react');

var About = React.createClass({

	render: function(){
		return (
		<div>
			<h2 className='text-center'>About</h2>
			<ul className='row'>
					<li>
						The application utilizes data from OpenWeatherMap.org <a className='text-center' href='http://openweathermap.org/'>Open Weather MapAPI</a> 
					</li>
					
					<li>
						You can also view all the code in my GitHub repo <a className='text-center' href='https://github.com/yueyangz/ReactWeather'>GitHub</a> 			
					</li>
			</ul>
		</div>)
	}
});


module.exports = About;
