import React from 'react';
//importing Tilt from react -tilt package
import Tilt from 'react-tilt';
// importing Logo CSS stylesheet
import './Logo.css';

//import brain icon 
import brain from './brain.png';
// eslint-disable-next-line
const Logo = () => {
	return (
		//creating classname for the div tag
		<div className='ma4 mt0'>
			{/*Providing React tilt with same tilt element and border shadow with dimensions such as height and width*/}
			<Tilt className="Tilt br2 shadow-3" options={{ max: 25 }} style={{ height: 200, width: 200 }} >
				<div className="Tilt-inner pa3"><img style = {{paddingTop: '4px'}} alt='logo' src={brain}/></div>
			</Tilt>
		</div>
	);
}


export default Logo;