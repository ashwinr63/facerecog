// import the relevant packages
import React from 'react';

// create a new navigation variable
const Navigation = ({ onRouteChange, isSignedIn }) => {
		// Adding navigation tag with flex display and justifycontent with flex-end with a <p> tag
		if (isSignedIn) {
			return (<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => onRouteChange('signout')}
					className='f3 link dim black underline pa3 pointer'>Log Out</p>
			</nav>
			);
		
		} else { 
			return (
				<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<p onClick={() => onRouteChange('SignIn')}
						className='f3 link dim black underline pa3 pointer'>Log In</p>
					<p onClick={() => onRouteChange('Register')}
						className='f3 link dim black underline pa3 pointer'>Create</p>
				</nav>
		);	
	}

	}

// export the default Navigation 
export default Navigation;