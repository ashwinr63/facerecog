// import the relevant packages
import React from 'react';

// create a new navigation variable
const Navigation = () => {
	return (
		// Adding navigation tag with flex display and justifycontent with flex-end with a <p> tag
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		<p className='f3 link dim black underline pa3 pointer'>Log Out</p>
		</nav>
	)
}

// export the default Navigation 
export default Navigation;