var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		debugger
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
					<form onSubmit={this.handleSubmit}>
						<ul className='menu'>
								<li>
									<input type='search' placeholder='Search'/>
								</li>
								<li>
									<input type='submit' className='button' value='Get Weather'/>
								</li>
						</ul>
					</form>	
				</div>
			</div>
	);
	}
});


module.exports = Nav;
