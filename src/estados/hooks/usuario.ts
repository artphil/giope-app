import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { TUsuario } from "../../interfaces/TUsuario";
import { autenticacao } from "../../util/autenticacao";
import { usuarioLogado } from "../atom";

export function useUsuarioLogado() {
	let [usuario, setUsuario] = useRecoilState(usuarioLogado);
	useEffect(()=>{
		setUsuario(autenticacao.usuarioLogado())
	},[setUsuario])
	return usuario
}

export function useSetUsuario() {
	const setUsuario = useSetRecoilState(usuarioLogado)
	return (usuario: TUsuario | null) => {
		setUsuario(usuario)
	}
}
