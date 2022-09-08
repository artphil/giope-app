import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
	test('mostrar e esconder menu ao clicar no botão menu',()=>{
		render(<Navbar/>)
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
		test('mostrar botão \'Login\'', () => {
			render(<Navbar/>)
			const botaoLogin = screen.getByText('Login')
			expect(botaoLogin).toBeInTheDocument()
		})
	})
})