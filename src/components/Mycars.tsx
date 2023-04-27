import { Component, Fragment } from 'react';

import Car from './Car';
import CarModel from './models/CarModel';
import MyHeader from './MyHeader';

interface IProps {
	title: string;
}

interface State {
	cars: CarModel[];
}

class Mycars extends Component<IProps> {
	state: State = {
		cars: [
			{ name: 'Ford', color: 'red', year: 2000 },
			{ name: 'Mercedes', color: 'black', year: 2023 },
			{ name: 'Peugeot', year: 1994 },
		],
	};

	addTenYears = () => {
		const updatedState = this.state.cars.map((car) => {
			return { ...car, year: car.year - 10 };
		});

		this.setState({ cars: updatedState });
	};

	getAge = (year: number): string => {
		const age = new Date().getFullYear() - year;

		if (age === 0) return age.toString();

		return age > 1 ? `${age} ans` : `${age} an`;
	};

	render() {
		const { title } = this.props;

		return (
			<Fragment>
				<MyHeader>{title}</MyHeader>
				<button onClick={this.addTenYears}>+ 10 ans</button>
				{this.state.cars.map((car, index) => (
					<Car
						key={index}
						name={car.name}
						color={car.color}
						year={this.getAge(car.year)}
					/>
				))}
			</Fragment>
		);
	}
}

export default Mycars;
