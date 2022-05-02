import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Ubuntu', 'Source Sans Pro', sans-serif;
        overflow: ${(props) => props.stateNavMobile ? 'hidden' : undefined};
    }
`;

export default GlobalStyle;