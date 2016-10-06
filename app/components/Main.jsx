var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({

// 	render: function(){
// 		return(
// 			<div>			
// 				<Nav />
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>	
// 		);
// 	}
// });

var Main = (props) => {
	return (
		<div>			
			<Nav />
			<div className='row'>
				<div className='small-6 large-8 small-centered columns'>
					{props.children}
				</div>
			</div>
		</div>
	)
};

module.exports = Main;