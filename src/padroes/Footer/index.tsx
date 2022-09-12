import { useUsuarioLogado } from '../../estados/hooks/usuario';
import estilos from './Footer.module.css'

const msg = 'Faça login para ter acesso.'

function Footer() {
	const usuario = useUsuarioLogado();

	return (
		<footer className={estilos.footer}>
			<h3 title='Usuário Logado'>
				{usuario ? `${usuario.nome}` : msg}
			</h3>
		</footer>
	);
}

export default Footer;