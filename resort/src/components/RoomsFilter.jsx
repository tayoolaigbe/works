import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const RoomsFilter = () => {
	const context = useContext(RoomContext);
	return <div>Hello from RoomsFilter</div>;
};

export default RoomsFilter;
