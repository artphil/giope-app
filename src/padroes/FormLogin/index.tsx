import { useState } from "react";
import Botao from "../../componentes/Botao";
import InputTexto from "../../componentes/InputTexto";
import { useSetUsuario } from "../../estados/hooks/usuario";
import { autenticacao } from "../../util/autenticacao";

function FormLogin() {
	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const setUsuarioBase = useSetUsuario()

	function camposInvalidos(): boolean {
		return usuario.length === 0 || senha.length === 0
	}

	function enviar(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const dadosUsuario = autenticacao.login(usuario, senha)
		setUsuarioBase(dadosUsuario)
	}

	return (
		<form onSubmit={enviar}>
			<InputTexto
				name="usuario"
				placeholder="Usuário"
				onChange={(e) => { setUsuario(e.target.value) }}
			/>
			<InputTexto
				senha
				type="password"
				placeholder="Senha"
				onChange={(e) => { setSenha(e.target.value) }}
			/>
			<Botao
				disabled={camposInvalidos()}
			>Enviar</Botao>
		</form>
	);
}

export default FormLogin;