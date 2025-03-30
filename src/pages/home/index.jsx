import { useState } from "react";
import logo from "../../assets/logo-github.png";
import iconSearch from "../../assets/icon-search.png";
import { Cabecalho, ContainerInput, Main } from "./styles";
import api from "../../services/api.js";

export function Home({ setError, setUserInfo }) {
  const [userName, setUserName] = useState("");

  async function getUserGithub(userName) {
    try {
      const response = await api.get(`/${userName}`);
      setUserInfo(response.data);
      setUserName("");
    } catch (error) {
      setError(
        "Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente"
      );
      setUserName("");
      console.log("Erro ao buscar o usuário", error);
    }

    if (userName === "") {
      alert("Digite um nome de usuário");
      setError("");
      return;
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    setUserName(e.target.value);
    if (e.target.value !== "") {
      setError("");
    }
  }
  return (
    <Main>
      <Cabecalho>
        <img src={logo} alt="Logo Github" />
        <h5>
          Perfil <span>GitHub</span>
        </h5>
      </Cabecalho>
      <ContainerInput>
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          onChange={handleInputChange}
          value={userName}
        />
        <img
          onClick={() => getUserGithub(userName)}
          src={iconSearch}
          alt="icon search"
        />
      </ContainerInput>
    </Main>
  );
}
