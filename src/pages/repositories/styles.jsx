import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
`;

export const RepoList = styled.ul`
  list-style: none;
`;

export const RepoItem = styled.li`
  background: #333;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #444;
    transform: scale(1.05);
  }
`;

export const RepoLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #ff4500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e03e00;
    transform: scale(1.05);
  }
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;
