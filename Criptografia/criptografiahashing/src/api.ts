import axios from "axios";

export async function ApiCripto(usuario, IUsuario){
    
    const url = "https://localhost:7140/api/usuario";
    const resposta = await axios.post("", url)
    
    resposta.data;
    resposta.status;

}
