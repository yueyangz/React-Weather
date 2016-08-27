var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		alert('Not wired yet!');
	},

	render: function(){
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>React Weather</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>	
						<li>
							<Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
						</li>	
					</ul>
				</div>

				<div className='top-bar-right'>
					<ul className='menu'>
						<li>
							<input type='search' placeholder='Search'/>
						</li>
						<li>
							<input className='button' onSubmit={this.handleSubmit} type='submit' value='Get Weather'/>
						</li>
					</ul>
				</div>
			</div>
	);
	}
});


module.exports = Nav;
