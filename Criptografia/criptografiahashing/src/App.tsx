import styles from "./page.module.css";
import { IUsuario } from "./interface";
import { useState } from "react";
import * as API from "@/app/api";

export default function TelaHashing() {
  const [usuario, setUsuario] = useState<IUsuario>({
    nome: "",
    CPF: "",
    Senha: "",
    RG: "",
  });

  async function Salvar() {
    try {
      await API.Cadastrar(usuario);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário.");
    }
  }

  return (
    <div className={styles.div}>
      <h1 className={styles.linha}>Cadastro</h1>

      <div className={styles.container}>
        <h1 className={styles.linha1}>Nome:</h1>
        <input
          className={styles.inputNome}
          type="text"
          value={usuario.nome}
          placeholder="Nome"
          onChange={(e) =>
            setUsuario({
              ...usuario,
              nome: e.target.value,
            })
          }
        />

        <h1 className={styles.linha1}>CPF:</h1>
        <input
          className={styles.inputNome}
          type="text"
          value={usuario.CPF}
          placeholder="CPF"
          maxLength={11}
          onChange={(e) =>
            setUsuario({
              ...usuario,
              CPF: e.target.value,
            })
          }
        />

        <h1 className={styles.linha1}>RG:</h1>
        <input
          className={styles.inputNome}
          type="text"
          value={usuario.RG}
          placeholder="RG"
          maxLength={11}
          onChange={(e) =>
            setUsuario({
              ...usuario,
              RG: e.target.value,
            })
          }
        />

        <h1 className={styles.linha1}>Senha:</h1>
        <input
          className={styles.inputNome}
          type="password"
          value={usuario.Senha}
          placeholder="Senha"
          onChange={(e) =>
            setUsuario({
              ...usuario,
              Senha: e.target.value,
            })
          }
        />

        <div className={styles.botoes}>
          <button
            className={styles.botaoE}
            onClick={Salvar}
          >
            Enviar
          </button>

          <button
            className={styles.botaoC}
            type="button"
            onClick={() =>
              setUsuario({
                Nome: "",
                CPF: "",
                Senha: "",
                RG: "",
              })
            }
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}