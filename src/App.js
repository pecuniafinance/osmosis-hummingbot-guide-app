import React, { useState } from "react";
import "./css/global.css";
import { Flex } from "./css/global.css";
import styled, { createGlobalStyle } from "styled-components";
import bg from "./imgs/osmosis-bg.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Install from "./pages/Install";
import Setup from "./pages/Setup";
import RunStrat from "./pages/RunStrat";
import Technical from "./pages/Technical";
import StyledNavbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const Container = styled.div`
  // color: var(--ammelia-400);
  height: 100%;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-color: red;
  position: relative;
  display: flex;
  // flex-direction: column;
`;

const Styles = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    background-color: var(--osmoverse);
    height: 100vh;
  `,
};

// const CSSReset = createGlobalStyle`
//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }

//   html {
//     font-size: 62.5%; /*1rem = 10px*/
//     box-sizing: border-box;
//   }

//   body {
//     font-size: 1.4rem;
//     font-family: sans-serif;
//   }
// `;

function App() {
  return (
    <Router>
      <Container>
        <StyledNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/install" element={<Install />} />
          <Route exact path="/setup" element={<Setup />} />
          <Route exact path="/run" element={<RunStrat />} />
          <Route exact path="/technical" element={<Technical />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
