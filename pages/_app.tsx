import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>SAO | Sistema de Apoio a Operação</title>
				<link rel="icon" href="/sao_logo.svg" />
			</Head>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp
