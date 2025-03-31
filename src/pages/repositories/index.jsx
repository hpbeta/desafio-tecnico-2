import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";
import {
  BackButton,
  Container,
  RepoItem,
  RepoLink,
  RepoList,
  Loading,
} from "./styles";

export function Repositories() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userName } = useParams();

  async function getRepositories() {
    setLoading(true);
    try {
      const response = await api.get(`/${userName}/repos`);
      setRepo(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Erro ao buscar os repositórios", error);
    }
  }

  useEffect(() => {
    getRepositories();
  }, [userName]);
  return (
    <Container>
      <h1>Repositórios de {userName}</h1>

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <RepoList>
          {repo.slice(0, 10).map((repositorio) => (
            <RepoItem key={repositorio.id}>
              <RepoLink href={repositorio.html_url} target="_blank">
                {repositorio.name}
              </RepoLink>
            </RepoItem>
          ))}
        </RepoList>
      )}

      <Link to="/">
        <BackButton>Voltar</BackButton>
      </Link>
    </Container>
  );
}
