/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { github } from './About'

class Nav extends React.Component {
    render() {return(
	<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href={`${github}`} target="github-swapi-react">
					<img src={`${process.env.PUBLIC_URL}/gfx/yoda.gif`} height="64" alt="Fetch-H#1 (SWAPI)"/>
				</a>
			</div>
			<div id="navbar" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li className="active"><a href="#" onClick={() => {this.props.stateFunc(0)}}><img src="home.svg" width="22" height="22" alt="Home" /></a></li>
					<li><a href="#" onClick={() => {this.props.stateFunc('about')}}><img src="question-mark.svg" width="22" height="22" alt="About" /></a></li>
					<li><a href="#" onClick={() => {this.props.stateFunc('contact')}}>Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
    )}
}

export default Nav
