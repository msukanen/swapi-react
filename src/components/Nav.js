/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { github } from './About'
import { urlGfx } from '../LocalUrl'

class Nav extends React.Component {
    render() {return(<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar"
						aria-expanded="false"  aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href={`${github}`} target="github-swapi-react">
					<img src={urlGfx('yoda.gif')} height="64" alt="Fetch-H#1 (SWAPI)"/>
				</a>
			</div>
			<div id="navbar" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li className="active"><a onClick={() => {this.props.stateFunc(0)}}><img src={urlGfx('home.svg')} width="22" height="22" alt="Home" /></a></li>
					<li><a onClick={() => {this.props.stateFunc('about')  }}><img src={urlGfx('question-mark.svg')} width="22" height="22" alt="About" /></a></li>
					<li><a onClick={() => {this.props.stateFunc('contact')}}>Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>)}
}

export default Nav
