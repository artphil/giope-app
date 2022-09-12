interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

function Botao({ children, ...props }: ButtonProps) {
	return (
		<button 
		{...props}
		style={{backgroundColor: 'red'}}
		>
			{children}
		</button>
	);
}

export default Botao;