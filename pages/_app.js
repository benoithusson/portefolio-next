import React, { useState } from "react";
import Container from "../components/Container";
import GlobalStyle from "../styles/globalStyle";
import { NavMobileContext } from "../helper/Context";

function MyApp({ Component, pageProps }) {
  const [stateNavMobile, setStateNavMobile] = useState(false);

  return (
    <NavMobileContext.Provider value={{ stateNavMobile, setStateNavMobile }}>
      <Container>
        <GlobalStyle stateNavMobile={stateNavMobile} />
        <Component {...pageProps} />
      </Container>
    </NavMobileContext.Provider>
  );
}

export default MyApp;
