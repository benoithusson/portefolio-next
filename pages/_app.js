import React from "react";
import Container from '../components/Container';
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
