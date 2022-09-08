import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil';

import { useUsuarioLogado } from "../../estados/hooks/usuario";
import Navbar from '.'

function NavbarTest() {
	return (
		<RecoilRoot>
			<Navbar />
		</RecoilRoot>
	);
}

jest.mock('../../estados/hooks/usuario', () => {
	return {
		useUsuarioLogado: jest.fn()
	}
})


describe('Navbar', () => {
	test('mostrar e esconder menu ao clicar no botão menu', () => {
		render(<NavbarTest />)
		const botaoMenu = screen.getByTitle('Menu')
		const menu1 = screen.queryByRole('list')
		expect(menu1).not.toBeInTheDocument()
		fireEvent.click(botaoMenu)
		const menu2 = screen.queryByRole('list')
		expect(menu2).toBeInTheDocument()
		fireEvent.click(botaoMenu)
		const menu3 = screen.queryByRole('list')
		expect(menu3).not.toBeInTheDocument()

	})
	describe('sem usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue(null)
		})

		test('mostrar botão \'Entrar\'', () => {
			render(<NavbarTest />)
			const botaoLogin = screen.queryByText('Entrar')
			expect(botaoLogin).toBeInTheDocument()
		})
		test('não mostrar botão \'Sair\'', () => {
			render(<NavbarTest />)
			const botaoLogin = screen.queryByText('Sair')
			expect(botaoLogin).not.toBeInTheDocument()
		})
	})
	describe('com usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue({ nome: 'Usuario' })
		})

		test('mostrar botão \'Entrar\'', () => {
			render(<NavbarTest />)
			const botaoLogin = screen.queryByText('Entrar')
			expect(botaoLogin).not.toBeInTheDocument()
		})
		test('mostrar botão \'Sair\'', () => {
			render(<NavbarTest />)
			const botaoLogin = screen.queryByText('Sair')
			expect(botaoLogin).toBeInTheDocument()
		})
	})
})