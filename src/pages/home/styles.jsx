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
