import React from "react";
// import "../css/global.css.js";
import "../css/global.css";
import { Link } from "react-router-dom";
import { Page } from "../css/global.css.js";
import OsmoButton from "../components/OsmoButton.js";

export default function HomePage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Page.Container>
      <Page.Wrapper className="homepageStyles">
        <h1>Using Osmosis Connector with Hummingbot Gateway</h1>
        <h2>A Guide for the Osmosis Community and Hummingbot Beginners</h2>
        <OsmoButton
          text="Hummingbot Osmosis Guide"
          textSize="20px"
          onClick={() =>
            openInNewTab(
              "https://hummingbot.org/academy-content/using-osmosis-with-hummingbot/"
            )
          }
        />
        <OsmoButton
          text="Hummingbot Docs"
          textSize="20px"
          onClick={() => openInNewTab("https://hummingbot.org/docs/")}
        />
        <OsmoButton
          text="Connector GitHub"
          textSize="20px"
          onClick={() =>
            openInNewTab(
              "https://github.com/hummingbot/gateway/tree/main/src/connectors/osmosis"
            )
          }
        />
        <ul>
          <header>
            Please note: In the following guide, code segments are shown in two
            different ways:
          </header>
          <li>
            <b>$</b> indicates a CLI Terminal command.
          </li>
          <li>
            <b>{">>>"}</b> indicates a Hummingbot client command.
          </li>
        </ul>
      </Page.Wrapper>
      <Link to="/install">
        <OsmoButton text="START HERE" textSize="14px" />
      </Link>
    </Page.Container>
  );
}
