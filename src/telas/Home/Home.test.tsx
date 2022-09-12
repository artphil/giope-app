import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil';

import { useUsuarioLogado } from "../../estados/hooks/usuario";
import Home from '.';

function HomeTest() {
	return (
		<RecoilRoot>
			<Home />
		</RecoilRoot>
	);
}

jest.mock('../../estados/hooks/usuario', () => {
	return {
		useUsuarioLogado: jest.fn(),
		useSetUsuario: () => jest.fn(),
	}
})


describe('Home', () => {
	
	describe('sem usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue(null)
		})

		test('mostrar campos Login', () => {
			render(<HomeTest />)
			const campologin = screen.queryByPlaceholderText('Usuário')
			expect(campologin).toBeInTheDocument()
		})
	})
	describe('com usuário', () => {
		beforeEach(() => {
			(useUsuarioLogado as jest.Mock).mockReturnValue({ nome: 'Usuario' })
		})

		test('não mostrar campos login', () => {
			render(<HomeTest />)
			const campologin = screen.queryByPlaceholderText('Usuário')
			expect(campologin).not.toBeInTheDocument()
		})
	})
})