import { useState } from "react";
import Botao from "../../componentes/Botao";
import InputTexto from "../../componentes/InputTexto";

function FormLogin() {
	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')

	function camposInvalidos():boolean{
		return usuario.length === 0 || senha.length === 0
	}
	return ( 
		<form>
			<InputTexto 
			name="usuario" 
			placeholder="Usuário"
			onChange={(e)=>{setUsuario(e.target.value)}}
			/>
			<InputTexto 
			senha 
			type="password"
			placeholder="Senha"
			onChange={(e)=>{setSenha(e.target.value)}}
			/>
			<Botao
			disabled={camposInvalidos()}
			>Enviar</Botao>
		</form>
	 );
}

export default FormLogin;