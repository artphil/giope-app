interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
	senha?: boolean,
}

function InputTexto({ senha, ...props }: TextProps) {
	return (
		<input
			{...props}
			type={senha ? 'password' : 'text'}
			style={{ minHeight: '10px', minWidth: '50px' }}
		/>
	);
}

export default InputTexto;