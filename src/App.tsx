import { Component } from 'react';

import Mycars from './components/Mycars';

import './App.css';

class App extends Component {
	state = {
		title: 'Catalogue Voitures',
	};

	changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const title = (event.target as HTMLInputElement).value;
		this.setState({ ...this.state, title });
	};

	render() {
		return (
			<div className="App">
				<Mycars {...this.state} />
				<input
					type="text"
					onChange={this.changeTitle}
					value={this.state.title}
				/>
			</div>
		);
	}
}

export default App;
