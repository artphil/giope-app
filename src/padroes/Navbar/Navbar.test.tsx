import { render, screen } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
	describe('sem usuário', () => {
		test('mostra botão \'Login\'', () => {
			render(<Navbar/>)
			const botaoLogin = screen.getByText('Login')
			expect(botaoLogin).toBeInTheDocument()
		})
	})
})