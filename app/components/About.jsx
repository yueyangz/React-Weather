var React = require('react');

var About = React.createClass({

	render: function(){
		return (
		<div>
			<h1 className='text-center page-title'>About</h1>
			<ul className='row'>
					<h4>My name is Yueyang. I am awesome.</h4> 		
					<p>You can also view my GitHub <a className='text-center' href='https://github.com/yueyangz/ReactWeather'>GitHub</a> </p>			
					<p>The Weather Gadget utilizes data from OpenWeatherMap.org <a className='text-center' href='http://openweathermap.org/'>Open Weather MapAPI</a></p>					
			</ul>
		</div>)
	}
});


module.exports = About;
