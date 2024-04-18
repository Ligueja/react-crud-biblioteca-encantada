import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        background: rgb(16,10,92);
        background: -moz-linear-gradient(174deg, rgba(16,10,92,1) 0%, rgba(170,0,182,1) 61%, rgba(38,119,135,1) 100%);
        background: -webkit-linear-gradient(174deg, rgba(16,10,92,1) 0%, rgba(170,0,182,1) 61%, rgba(38,119,135,1) 100%);
        background: linear-gradient(174deg, rgba(16,10,92,1) 0%, rgba(170,0,182,1) 61%, rgba(38,119,135,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100a5c",endColorstr="#267787",GradientType=1);
        /* background-color: #b6daab; */
        color: white;
    }
`;
