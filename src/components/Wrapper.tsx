interface IProps {
	children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: IProps) => {
	const style = {
		backgroundColor: 'pink',
		width: '400px',
		padding: '10px',
		margin: '5px auto',
	};

	return <div style={style}>{children}</div>;
};

export default Wrapper;
