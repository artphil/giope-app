import { AppProps } from "next/app";
import { JSXElementConstructor, ReactComponentElement, ReactElement, ReactHTMLElement, ReactNode } from "react";
import Footer from "../../padroes/Footer";
import Navbar from "../../padroes/Navbar";

import estilos from './TelaBase.module.css';
interface Props {
	children?: React.ReactNode
}

function TelaBase({ children }: Props) {
	return (
		<>
			<Navbar />
			<main className={estilos.conteudo}>
				{children}
			</main>
			<Footer />
		</>
	);
}

export default TelaBase;