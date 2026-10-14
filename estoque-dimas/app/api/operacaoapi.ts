import axios from "axios";
import { IOperacao } from "../interfaces/operacoesinterface";
import { IProduto } from "../interfaces/produtointerface";

const url = "https:vistoque.runasp.net/api/operacaoEstoque";

export async function PostOperacao(operacao : IOperacao): Promise<boolean>{
    const resposta = await axios.post (url, operacao);
    return resposta.status == 200  || resposta.status == 201;
} 