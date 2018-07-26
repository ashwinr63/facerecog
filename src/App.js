import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
//import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';



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

const initialState = {
	input: '',
	imageUrl: '',
	box: {},
	route: 'SignIn',
	isSignedIn: false,
	user: {
		name: '',
		id: '',
		email: '',
		entries: 0,
		joined: ''
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}
	loadUser = (data) => {
		this.setState({
			user: {
				email: data.email,
				id: data.id,
				entries: data.entries,
				joined: data.joined,
				name: data.name
			}
		})
	}

	calculateFaceLocation = (data) => {

		// eslint-disable-next-line
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

		const image = document.getElementById('inputimage');

		const width = Number(image.width);

		const height = Number(image.height);

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
		//console.log(width, height);
	}

	displayFaceBox = (box) => {
		this.setState({ box: box })
	}


	onInputChange = (event) => {
		this.setState({ input: event.target.value })
	}


	onPictureSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		fetch('https://stormy-tor-91840.herokuapp.com/imageurl', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				input: this.state.input
			})
		})
			.then(response => console.log(response.json()))
			.then(response => {
				if (response) {
					fetch('https://stormy-tor-91840.herokuapp.com/image', {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then(response => response.json())
						.then(count => {
							this.setState(Object.assign(this.state.user, { entries: count }))
						})
						.catch(console.log)

				}
				this.displayFaceBox(this.calculateFaceLocation(response))
			})
			.catch(err => console.log(err));
	}


	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState(initialState)
		} else if (route === 'home') {
			this.setState({ isSignedIn: true })
		}
		this.setState({ route: route })
	}

	render() {
		const { isSignedIn, imageUrl, route, box } = this.state;
		return (
		<div className="App">
				<Particles className='particles'
					params={particleOption}
				/>

				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{route === 'home'
					? <div>
						<Logo />
						<Rank name={this.state.user.name} entries={this.state.user.entries} />
						<ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}
						/>
						<FaceRecognition box={box} imageUrl={imageUrl}
						/>
				</div>
				: (
						route === 'SignIn'
							? <SignIn
								loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
							: <Register
								loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
					)
				}
			</div>
		);
	}
}

export default App;
