import { Component, Fragment } from 'react';

import Car from './Car';

class Mycars extends Component {
	render() {
		return (
			<Fragment>
				<h1>My Cars</h1>
				<Car color="red">Ford</Car>
				<Car color="black">Mercedes</Car>
				<Car color="red">Peugeot</Car>
			</Fragment>
		);
	}
}

export default Mycars;
