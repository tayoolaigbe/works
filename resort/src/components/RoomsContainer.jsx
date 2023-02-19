import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

const RoomsContainer = () => {
	return (
		<RoomConsumer>
			{value => {
				return (
					<div>
						Hello from RoomsContainer
						<RoomsFilter />
						<RoomsList />
					</div>
				);
			}}
		</RoomConsumer>
	);
};

export default RoomsContainer;
