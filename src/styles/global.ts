import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #131313;
        font-family: "Poppins", sans-serif;
    }
    ::selection {
        background-color: #d2d609;
        color: whitesmoke;
    }
    
    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: #414141;
    }

    ::-webkit-scrollbar-thumb {
        background: #c8190c;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`