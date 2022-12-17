import { createGlobalStyle } from "styled-components";
import fundo from '../assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-image: url(${fundo});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`