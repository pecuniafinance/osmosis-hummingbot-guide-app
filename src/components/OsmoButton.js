import React from "react";
import "../css/global.css.js";
import { Flex } from "../css/global.css.js";
import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  border: none;
  // background: none;
  padding: 1rem 3rem;
  background-color: var(--wosmongton);
  color: var(--white-high);
  border-radius: 10px;
`;

export default function OsmoButton({ text, textSize }) {
  return <Button style={{ fontSize: textSize }}>{text}</Button>;
}
