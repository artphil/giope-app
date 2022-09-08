import { useRecoilValue } from "recoil";
import { usuarioLogado } from "../atom";

export function useUsuarioLogado(){
	return useRecoilValue(usuarioLogado);
}
