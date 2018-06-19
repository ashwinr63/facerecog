import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'This MagiC Brain will check on faces in your pictures. Check and see for yourself'}
			</p>
			<div className='center'>
				<div className='form center pa4 br2 shadow-2'><input className='f4 pa2 w-70 center' type='tex' />
					<button className='w-30 grow f4 link ph3 pv2 dib blue bg-light-green'>Detect</button>
				</div>
			</div>
		</div>
	);
}


export default ImageLinkForm;