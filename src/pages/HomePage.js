import React from "react";
// import "../css/global.css.js";
import { Flex, Page } from "../css/global.css.js";
import styled from "styled-components";
import OsmoButton from "../components/OsmoButton.js";

export default function HomePage() {
  return (
    <Page.Container>
      <Page.Wrapper>
        Home
        <OsmoButton text="Hummingbot Docs" textSize="24px" />
        <OsmoButton text="Osmosis Grants Program 2023" textSize="24px" />
      </Page.Wrapper>
    </Page.Container>
  );
}
