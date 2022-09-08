import { atom } from "recoil";
import { TUsuario } from "../interfaces/TUsuario";

export const usuarioLogado = atom<TUsuario>({
  key: 'usuarioLogado',
  default: {nome:'nomeDoUsuario'}
})