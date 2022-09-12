import { useUsuarioLogado } from "../../estados/hooks/usuario";
import FormLogin from "../../padroes/FormLogin";
import TelaBase from "../TelaBase";
import estilos from './Home.module.css'

function Home() {
	const usuario = useUsuarioLogado();
	return (
		<TelaBase>
			{!usuario && 
			<div className={estilos.login}>
			<FormLogin/>
			</div>
			}
		</TelaBase>
	);
}

export default Home;