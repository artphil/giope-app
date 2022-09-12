import { useState } from "react";

function FormLogin() {
	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')

	function camposInvalidos():boolean{
		return usuario.length === 0 || senha.length === 0
	}
	return ( 
		<form>
			<input 
			name="usuario" 
			type="text" 
			placeholder="Usuário"
			onChange={(e)=>{setUsuario(e.target.value)}}
			/>
			<input 
			name="senha" 
			type="password"
			placeholder="Senha"
			onChange={(e)=>{setSenha(e.target.value)}}
			/>
			<button
			disabled={camposInvalidos()}
			>Enviar</button>
		</form>
	 );
}

export default FormLogin;