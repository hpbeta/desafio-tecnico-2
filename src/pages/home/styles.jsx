import styled from "styled-components";
import { HiOutlineExternalLink } from "react-icons/hi";

export const SphereLeft = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, #005cff 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(80px);
  top: 410px;
  left: -195px;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const SphereRight = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, #005cff 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(80px);
  top: 10px;
  right: 0;
  transform: translate(50%, -50%);
  z-index: -1;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 39px;
  gap: 30px;
  color: #ffffff;
  padding: 0 20px;
  background-color: #000000;
  padding: 39px 0;
  max-width: 1156px;
  height: 537px;
  margin: 137px auto;
  position: relative;
  z-index: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
    height: auto;
    margin-top: 150px;
    min-height: 400px;
  }

  @media (max-width: 493px) {
    max-width: 100%;
    padding: 15px;
    height: auto;
    margin-top: 150px;
    min-height: 350px;
  }
`;

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

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

    &::placeholder {
      color: #000000;
    }
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

export const ContainerMain = styled.div`
  border-radius: 5px;
  padding: 30px 0;
  color: #000000;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 100%;
  max-width: 804px;
  height: 257px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px 0;
    height: auto;
  }

  @media (max-width: 493px) {
    max-width: 100%;
    padding: 15px 0;
    height: auto;
  }
`;

export const ContainerLinkExternal = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const IconExternal = styled(HiOutlineExternalLink)`
  color: #005cff;
  font-size: 23px;
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: -10px;
  @media (max-width: 493px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const ContainerInfo = styled.div`
  @media (max-width: 493px) {
    text-align: center;
    margin-left: 32px;
    margin-top: -40px;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  border: 2px solid #005cff;
  width: 220px;
  margin-left: 33px;
`;

export const Name = styled.p`
  margin: 68px 0 16px 0;
  color: #005cff;
  font-weight: bold;
`;

export const Bio = styled.p`
  font-size: 15px;
  max-width: 448px;
  line-height: 25px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #005cff;
  border: none;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

export const MessageError = styled.span`
  background-color: #d9d9d9;
  color: #f50404;
  padding: 20px;
  max-width: 500px;
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
