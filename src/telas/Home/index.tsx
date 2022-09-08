import Head from "next/head";
import Navbar from "../../padroes/Navbar";

function Home() {
	return (
		<>
			<Navbar />

			<main>
				<h1>
					Home Page
				</h1>
			</main>

			<footer>
				Rodape
			</footer></>
	);
}

export default Home;