import { useRouter } from "next/router";
import { useState } from "react";
import Botao from "../../componentes/Botao";
import { useUsuarioLogado } from "../../estados/hooks/usuario";
import { autenticacao } from "../../util/autenticacao";

import estilos from './Navbar.module.css'

function Navbar() {
	const [mostraMenu, setMostraMenu] = useState(false);
	const usuario = useUsuarioLogado();
	const route = useRouter()
	function toggleMenu() {
		setMostraMenu(!mostraMenu)
	}
	function sair(){
		autenticacao.logout()
		route.reload()
	}
	return (
		<div className={estilos.navbar}>
			<nav className={estilos.navbarContent}>

				<div className={estilos.navbarBotao}>
					<Botao
						title="Menu"
						onClick={toggleMenu}
					>
						Menu
					</Botao>
				</div>

				<div className={estilos.navbarTitulo}>
					<h1>SAO | Sistema de Apoio a Operação</h1>
				</div>

				<h1>{usuario?.nome}</h1>

				<div className={estilos.navbarBotao}>
					{!usuario &&
						<Botao>Entrar</Botao>
					}
					{usuario &&
						<Botao
						onClick={sair}
						>Sair</Botao>
					}
				</div>
			</nav>
			{mostraMenu &&
				<div className={estilos.menu}>
					<ul>
						<li>
							item menu
						</li>
					</ul>
				</div>}
		</div>
	);
}

export default Navbar;