import { useState } from "react";

function Navbar() {
const [mostraMenu, setMostraMenu] = useState(false);
function toggleMenu(){
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
				<button>Login</button>
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