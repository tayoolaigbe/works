import React, { Component } from 'react';
import defaultBcg from '../assets/images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		};
	}

	// componentDidMount(){

	// }

	static contextType = RoomContext;
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		if (!room) {
			return (
				<div className="error">
					<h3>no such room found...</h3>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</div>
			);
		}
		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room;
		return (
			<Hero hero="roomsHero">
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</Banner>
			</Hero>
		);
	}
}
