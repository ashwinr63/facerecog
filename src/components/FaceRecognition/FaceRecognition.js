// import the relevant packages
import React from 'react';
//import Facerecog css files
import './FaceRecognition.css';


// create a new FaceRecog component
const FaceRecognition = ({ imageURL, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageURL} width='500px' height='auto' />
				<div className="bounding-box" style={{top: box.topRow, rightCol: box.rightCol, bottomRow: box.bottomRow, leftCol: box.leftCol
					}}>
				</div>
			</div>
		</div>
	);
}

// export the default Navigation 
export default FaceRecognition;