import { MouseEvent } from 'react';

interface IProps {
	children: string;
}

const MyHeader = ({ children }: IProps) => {
	const addStyle = (event: MouseEvent<HTMLHeadingElement>) => {
		const target = event.target as HTMLHeadingElement;

		if (target.classList.contains('styled') === false) {
			target.classList.add('styled');
		}
	};

	const removeStyle = (event: MouseEvent<HTMLHeadingElement>) => {
		const target = event.target as HTMLHeadingElement;

		if (target.classList.contains('styled')) {
			target.classList.remove('styled');
		}
	};

	return (
		<h1 onMouseOver={addStyle} onMouseOut={removeStyle}>
			{children}
		</h1>
	);
};

export default MyHeader;
