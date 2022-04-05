import React, { useState } from "react";
import Container from "../components/Container";
import GlobalStyle from "../styles/globalStyle";
// Step 2) Import context into root element or parent element
import { NavMobileContext } from "../helper/Context";

function MyApp({ Component, pageProps }) {
  const [stateNavMobile, setStateNavMobile] = useState(false);

  // When I click on hamburger icon, stateNavMobile changed
  // So useContext works
  // But why Modal is not displayed ?
  console.log(stateNavMobile);

  return (
    // Step 3) Create the context provider + pass stateNavMobile and setState function
    <NavMobileContext.Provider value={{stateNavMobile, setStateNavMobile}}>
      <Container>
        {/* How to use context into GlobalStyles ?
        */}
        <GlobalStyle stateNavMobile={stateNavMobile} />
        <Component {...pageProps} />
      </Container>
    </NavMobileContext.Provider>
  );
}

export default MyApp;
