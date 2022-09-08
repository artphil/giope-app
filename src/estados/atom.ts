import { atom } from "recoil";
import { TUsuario } from "../interfaces/TUsuario";

export const usuarioLogado = atom<TUsuario | null>({
	key: 'usuarioLogado',
	default: null
})