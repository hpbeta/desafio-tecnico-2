import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 39px;
  gap: 30px;
  color: #ffffff;
`;

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 27px;

  h5 {
    font-size: 60px;
  }
  span {
    font-weight: bold;
  }

  @media (max-width: 493px) {
    h5 {
      font-size: 30px;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    border: none;
    padding: 20px 10px;
    border-radius: 5px;
    width: 453px;
    outline: none;
  }

  img {
    position: absolute;
    right: 5px;
    background-color: #005cff;
    width: 50px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 493px) {
    width: 300px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 20px;
  border: 1px solid #808080;
  border-radius: 5px;
  padding: 20px 0;
  width: 350px;
  color: #ffffff;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    border-radius: 50%;
    width: 120px;
  }

  p {
  }
`;

export const ContainerFollowers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #005cff;
  border: none;
  color: #ffffff;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const MessageError = styled.span`
  background-color: #ffffff;
  color: #f50404;
  padding: 20px;
  width: 500px;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Loading = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;
