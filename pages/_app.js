import React, { useState } from "react";
import Container from "../components/Container";
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  const [stateNavMobile, setStateNavMobile] = useState(false);

  return (
    <Container
      stateNavMobile={stateNavMobile}
      setStateNavMobile={setStateNavMobile}
    >
      <GlobalStyle stateNavMobile={stateNavMobile} />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
