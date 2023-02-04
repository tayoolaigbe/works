import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenTOSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';

const USer = ({ userId }) => {
	const user = useSelector(state => selectUserById(state, userId));

	const navigate = useNavigate();

	if (user) {
		const handleEdit = () => navigate(`/dash/users/${userId}`);

		const userRolesString = user.roles.toString().replaceAll(',', ', ');
	} else {
		return null;
	}
};

export default User;
