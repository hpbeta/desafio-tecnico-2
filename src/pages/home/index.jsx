import { useState } from "react";
import logo from "../../assets/logo-github.png";
import iconSearch from "../../assets/icon-search.png";



import {
  Button,
  Cabecalho,
  Container,
  Img,
  ContainerInfo,
  ContainerInput,
  Main,
  MessageError,
  Loading,
  Name,
  Bio,
  IconExternal,
  ContainerLinkExternal
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
      console.log(response);
      
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
        
        <Img src={userInfo.avatar_url} alt="" />
        <div>
         <Name>{userInfo.name}</Name>
         <Bio>{userInfo.bio}</Bio>
         {/* <ContainerFollowers>
           <p>Followers: {userInfo.followers}</p>
           <p>Following: {userInfo.following}</p>
         </ContainerFollowers> */}
         <Link to={`/repositories/${userInfo.login}/repos`}>
         <Button>Ver repositórios</Button>
       </Link>
        </div>
        <ContainerLinkExternal>
      <a href={userInfo.html_url} target="_blank">
          <IconExternal />
        </a>
      </ContainerLinkExternal>
       </ContainerInfo>
       
     </Container>
     
         
        )
      )}

      {error && <MessageError>{error}</MessageError>}
    </Main>
  );
}
