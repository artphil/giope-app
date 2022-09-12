import { fireEvent, render, screen } from "@testing-library/react";
import FormLogin from ".";


describe('FormLogin', () => {
	describe('campos inválidos', () => {
		test('campos vazios - botão Enviar deve estar desabilitado', () => {
			render(<FormLogin />)
			const botao = screen.getByText('Enviar')
			expect(botao).toBeDisabled()
		})
		test('senha vazia - botão Enviar deve estar desabilitado', () => {
			render(<FormLogin />)
			const usuario = screen.getByPlaceholderText('Usuário')
			fireEvent.change(usuario, {
				target: {
					value: 'teste'
				}
			})
			const botao = screen.getByText('Enviar')
			expect(botao).toBeDisabled()
		})
		test('usuario vazio - botão Enviar deve estar desabilitado', () => {
			render(<FormLogin />)
			const senha = screen.getByPlaceholderText('Senha')
			fireEvent.change(senha, {
				target: {
					value: 'teste'
				}
			})
			const botao = screen.getByText('Enviar')
			expect(botao).toBeDisabled()
		})
	})
	describe('campos válidos', ()=>{
		test('botão Enviar deve estar habilitado', ()=>{
			render(<FormLogin />)
			const usuario = screen.getByPlaceholderText('Usuário')
			fireEvent.change(usuario, {
				target: {
					value: 'teste'
				}
			})
			const senha = screen.getByPlaceholderText('Senha')
			fireEvent.change(senha, {
				target: {
					value: 'teste'
				}
			})
			const botao = screen.getByText('Enviar')
			expect(botao).not.toBeDisabled()
		})
	})
})