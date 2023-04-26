import { Component, Fragment } from 'react';

import Car from './Car';

class Mycars extends Component {
	render() {
		return (
			<Fragment>
				<h1>My Cars</h1>
				<Car />
				<Car />
				<Car />
			</Fragment>
		);
	}
}

export default Mycars;
