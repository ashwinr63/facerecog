import React from 'react';

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'This MagiC Brain will check on faces in your pictures. Check and see for yourself'}
			</p>
			<div>
				<input className='f4 pa2 w-70 center' type='tex' />
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'>Detect</button>
			</div>
		</div>
	);
}


export default ImageLinkForm;