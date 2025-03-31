import { useState } from "react";
import logo from "../../assets/logo-github.png";
import iconSearch from "../../assets/icon-search.png";
import {
  Button,
  Cabecalho,
  Container,
  ContainerFollowers,
  ContainerInfo,
  ContainerInput,
  Main,
  MessageError,
  Loading,
} from "./styles";
import api from "../../services/api.js";
import { Link } from "react-router-dom";

export function Home() {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getUserGithub(userName) {
    if (!userName) {
      setError("Digite um nome de usuário");
      return;
    }

    setLoading(true);

    try {
      const response = await api.get(`/${userName}`);
      setUserInfo(response.data);
      setUserName("");
      setLoading(false);
      setError("");
    } catch (error) {
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente"
      );
      setLoading(false);
      console.log("Erro ao buscar o usuário", error);
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

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        Object.keys(userInfo).length > 0 && (
          <Container>
            <ContainerInfo>
              <img src={userInfo.avatar_url} alt="" />
              <p>{userInfo.name}</p>
              <p>{userInfo.bio}</p>
              <ContainerFollowers>
                <p>Followers: {userInfo.followers}</p>
                <p>Following: {userInfo.following}</p>
              </ContainerFollowers>
            </ContainerInfo>
            <Link to={`/repositories/${userInfo.login}/repos`}>
              <Button>Ver repositórios</Button>
            </Link>
          </Container>
        )
      )}

      {error && <MessageError>{error}</MessageError>}
    </Main>
  );
}
