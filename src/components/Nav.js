import React from 'react'

class Nav extends React.Component {
    render() { return(
	<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="/#"><b>Fetch-H#1</b> (SWAPI)</a>
			</div>
			<div id="navbar" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li className="active"><a href="/#"><img src="home.svg" width="22" height="22" alt="Home" /></a></li>
					<li><a href="/#"><img src="question-mark.svg" width="22" height="22" alt="About" /></a></li>
					<li><a href="/#">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
    )}
}

export default Nav
