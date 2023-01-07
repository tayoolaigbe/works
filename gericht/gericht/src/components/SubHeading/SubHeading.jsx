import React from 'react';

import images from '../../constants/images';

const SubHeading = () => (
	<div style={{ marginBotom: '1rem' }}>
		<p className="p__cormorant">TITLE</p>
		<img src={images.spoon} alt="spoon" className="spoon_img" />
	</div>
);

export default SubHeading;
