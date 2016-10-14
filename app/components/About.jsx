var React = require('react');

var About = React.createClass({

	render: function(){
		return (
		<div>
			<h1 className='text-center page-title'>About</h1>
			<ul className='row'>
					<p>My name is Yueyang. I am a current MCIT student at the University of Pennsylvania. 
					   I started learning coding in 2015 Fall. You can also view my GitHub 
					   <a className='text-center' href='https://github.com/yueyangz/ReactWeather'> GitHub</a>
					</p> 		
					<p>The weather inquiry application utilizes data from OpenWeatherMap.org <a className='text-center' href='http://openweathermap.org/'>Open Weather Map</a></p>					
			</ul>
		</div>)
	}
});


module.exports = About;
