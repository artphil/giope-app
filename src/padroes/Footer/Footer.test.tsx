import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil';

import { useUsuarioLogado } from "../../estados/hooks/usuario";
import Footer from '.'

function FooterTest() {
	return (
		<RecoilRoot>
			<Footer />
		</RecoilRoot>
	);
}

jest.mock('../../estados/hooks/usuario', () => {
	return {
		useUsuarioLogado: jest.fn()
	}
})

const msg = 'Faça login para ter acesso.'
const usuario = {nome: 'Teste'}

describe('Footer', () => {
	describe('sem usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue(null)
		})

		test('mostrar mensagem padrão', () => {
			render(<FooterTest />)
			const msgUsuario = screen.getByTitle('Usuário Logado')
			expect(msgUsuario.textContent).toBe(msg)
		})
	})
	describe('com usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue(usuario)
		})

		test('mostrar usuário logado', () => {
			render(<FooterTest />)
			const msgUsuario = screen.getByTitle('Usuário Logado')
			expect(msgUsuario.textContent).toBe(usuario.nome)
		})
	})
})