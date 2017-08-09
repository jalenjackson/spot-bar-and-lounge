import React, { Component } from "react";
import Zoomy from 'react-zoomy';

export default class Menu extends Component {
    render() {
        return (
            <div className="location-container">
                <h1>Location</h1>
                <div id="map"></div>
            </div>

        );
    }
}
