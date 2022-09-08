import { useState } from "react";
import { useUsuarioLogado } from "../../estados/hooks/usuario";

import estilos from './Navbar.module.css'

function Navbar() {
	const [mostraMenu, setMostraMenu] = useState(false);
	const usuario = useUsuarioLogado();
	function toggleMenu() {
		setMostraMenu(!mostraMenu)
	}
	return (
		<div className={estilos.navbar}>
			<nav className={estilos.navbarContent}>

				<div className={estilos.navbarBotao}>
					<button
						title="Menu"
						onClick={toggleMenu}
					>
						Menu
					</button>
				</div>

				<div className={estilos.navbarTitulo}>
					<h1>SAO | Sistema de Apoio a Operação</h1>
				</div>

				<h1>{usuario?.nome}</h1>

				<div className={estilos.navbarBotao}>
					{!usuario &&
						<button>Entrar</button>
					}
					{usuario &&
						<button>Sair</button>
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