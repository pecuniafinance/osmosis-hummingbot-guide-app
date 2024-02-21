import React from "react";
import "../css/global.css.js";
import { Flex } from "../css/global.css.js";
import styled from "styled-components";
import OsmoButton from "../components/OsmoButton.js";

const Home = {
  Container: styled.div`
    width: 100%;
    max-height: 100vh;
    ${Flex}
  `,
  Wrapper: styled.div`
    width: 50vw;
    height: 50vh;
    border-radius: 50px;
    background-color: var(--osmoverse-850);
    margin: auto;
  `,
};

export default function HomePage() {
  return (
    <Home.Container>
      <Home.Wrapper>
        Home
        <OsmoButton text="Hummingbot Docs" textSize="24px" />
        <OsmoButton text="Osmosis Grants Program 2023" textSize="24px" />
      </Home.Wrapper>
    </Home.Container>
  );
}
