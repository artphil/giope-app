export const autenticacao = {
	login: (usuario: string, senha: string) => {
		const data = { nome: usuario }
		sessionStorage.setItem('usuarioLogado', JSON.stringify(data))
		return data
	},
	logout: () => {
		sessionStorage.removeItem('usuarioLogado')
	},
	usuarioLogado: () => {
		const data = sessionStorage.getItem('usuarioLogado')
		return data ? JSON.parse(data) : null
	}
}