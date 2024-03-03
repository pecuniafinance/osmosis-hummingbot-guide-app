import React from "react";
import "../css/global.css";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";

const markdownIntro = `
# Install Hummingbot + Gateway (Docker)


`;

const markdown1 = `
## Install Docker on Ubuntu


`;

const markdown2 = `
## Install Hummingbot Deploy-Examples



`;

function Setup() {
  return (
    <Page.Container>
      <Page.Wrapper>
        <Markdown>{markdownIntro}</Markdown>
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown1}</Markdown>
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown2}</Markdown>
        <Link to="/create-strategy">
          <OsmoButton text="Next: RUN" textSize="14px" />
        </Link>
      </Page.Wrapper>
    </Page.Container>
  );
}

export default Setup;
