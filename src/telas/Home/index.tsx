import { useEffect } from "react";
import { useSetUsuario, useUsuarioLogado } from "../../estados/hooks/usuario";
import FormLogin from "../../padroes/FormLogin";
import { autenticacao } from "../../util/autenticacao";
import TelaBase from "../TelaBase";
import estilos from './Home.module.css'

function Home() {
	const usuario = useUsuarioLogado();
	// const setusuario = useSetUsuario();

	// useEffect(() => {
	// 	if (!Boolean(usuario)) {
	// 		const dados = autenticacao.usuarioLogado()
	// 		setusuario(dados)
	// 	}
	// })

	return (
		<TelaBase>
			{!Boolean(usuario) &&
				<div className={estilos.login}>
					<FormLogin />
				</div>
			}
		</TelaBase>
	);
}

export default Home;