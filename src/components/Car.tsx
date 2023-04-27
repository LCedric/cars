import Wrapper from './Wrapper';

interface IProps {
	name: string;
	year: string;
	color?: string;
}

const Car = ({ name, year, color }: IProps) => {
	return (
		<Wrapper>
			<p>Marque: {name}</p>
			<p>Année: {year} </p>
			<p>Couleur: {color ? color : 'Néant'} </p>
		</Wrapper>
	);
};

export default Car;
