import { createGlobalStyle } from "styled-components";
import camada from "../assets/camada.png";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #1f1f1f;
        font-family: "Nunito Sans", sans-serif;
        overflow: hidden;
        background-image: url(${camada});
        background-size: 149px 139px;
        background-repeat: no-repeat; 
        background-position: 100px 70px; 
        height: 100vh; 

        @media (max-width: 608px) {
            background-position: -20px 80px; 
  }
    }
`;
