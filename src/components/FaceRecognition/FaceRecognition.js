// import the relevant packages
import React from 'react';

// create a new FaceRecog component
const FaceRecognition = ({imageURL}) => {
	return (
		<div className='center'>
			<img alt='' src={imageURL}/>
		</div>
	);
}

// export the default Navigation 
export default FaceRecognition;