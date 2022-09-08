import { useState } from "react";
import { useUsuarioLogado } from "../../estados/hooks/usuario";

function Navbar() {
	const [mostraMenu, setMostraMenu] = useState(false);
	const usuario = useUsuarioLogado();
	function toggleMenu() {
		setMostraMenu(!mostraMenu)
	}
	return (
		<section>
			<nav>
				<button
					title="Menu"
					onClick={toggleMenu}
				>
					Menu
				</button>
				<h1>{usuario?.nome}</h1>
				{!usuario &&
					<button>Entrar</button>
				}
				{usuario &&
					<button>Sair</button>
				}
			</nav>
			{mostraMenu &&
				<div>
					<ul>
						<li>
							item menu
						</li>
					</ul>
				</div>}
		</section>
	);
}

export default Navbar;