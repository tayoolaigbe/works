import React, { Component } from 'react';
import defaultBcg from '../assets/images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		};
	}

	// componentDidMount(){

	// }

	static contextType = RoomContext;
	render() {
		return <div>Hello from SingleRoom</div>;
	}
}
