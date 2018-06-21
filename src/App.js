import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
	apiKey: 'e7d4b611ae8e466592389d540f23a118'
});


const particleOption = 
	{
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 700
			}
		}
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',

		}
	}
	onInputChange = (event) => {
		this.setState({input: event.target.value})
	}


	onButtonSubmit = () => {
		this.setState({imageURL: this.state.input});
		app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
			function (response) {
				// do something with response
				console.log(response.outputs[0]);
			},
			function (err) {
				// there was an error
			}
		);
	}
  render() {
    return (
      <div className="App">
			<Particles className='particles'
				params={particleOption}
			/>
       <Navigation/>
	    <Logo />
		<Rank/>
	   <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
			<FaceRecognition imageURL={this.state.imageURL}/> 
      </div>
    );
  }
}

export default App;
