import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div className="page home">
				<div className="first-side">
					<img src="http://www.pngall.com/wp-content/uploads/2016/05/Champagne-Free-Download-PNG.png"/>
					<h1><span>Spot Bar & Lounge</span></h1>

				</div>

				<div className="top-side">
					<h1>Come join us at the Spot</h1>
					<button>Set up reservation</button>
				</div>

				<div className="bottom-side">
					<h1>Come Enjoy our delicious food</h1>
					<button>See menu</button>
				</div>
			</div>
		);
	}
}
