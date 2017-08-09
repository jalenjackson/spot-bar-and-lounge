import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<img className="logo" src="http://skybartucson.com/wp-content/uploads/sites/5/2015/07/skybarlogo.png"/>
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/projects">Gallery</NavLink>
					<NavLink to="/menu">Menu</NavLink>

					<NavLink to="/location">Location</NavLink>

				</nav>
			</div>
		)
	}
}