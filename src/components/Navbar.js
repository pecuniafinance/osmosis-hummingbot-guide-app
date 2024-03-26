import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import burgermenu from "../imgs/menu-icon-test-tubes.png";
import logo from "../imgs/logo192.png";
import "../css/global.css";
import { Flex } from "../css/global.css.js";
import { HiHome } from "react-icons/hi";
import { RiInstallFill } from "react-icons/ri";
import { FaHatWizard } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { BsClipboard2DataFill } from "react-icons/bs";

const Navbar = {
  Wrapper: styled.nav`
    height: 100%;
    min-height: 100vh;
    width: 240px;
    // padding: 0 3rem;
    gap: 20px;
    ${Flex}
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--osmoverse-850);

    @media only screen and (max-width: 40em) {
      height: 10%;
      min-height: 100px;
      flex-direction: row;
      justify-content: space-around;
      position: fixed;
      width: 100vw;
      bottom: 0;
      padding: 0 2rem;
    }
  `,
  Logo: styled.img`
    height: 80px;
    margin: 20px 0;
    @media only screen and (max-width: 40em) {
      margin: 0;
    }
  `,

  Text: styled.div`
    display: none;
    &.credit {
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: auto;
      h2 {
        padding: 0 20px;
        margin: 0;
        font-size: 2vmin;
        color: var(--white-disabled);
      }
      @media only screen and (max-width: 40em) {
        display: none;
      }
    }
    @media only screen and (max-width: 40em) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      h2 {
        padding: 0 20px;
        margin: 0;
        font-size: 3vmin;
        color: var(--white-disabled);
      }
    }
  `,
  Items: styled.ul`
    width: 100%;
    ${Flex}
    flex-direction: column;
    list-style: none;
    align-items: left;
    gap: 10px;
    padding: 0;
    margin: 0;
    padding: 0 5px;
    @media only screen and (max-width: 40em) {
      position: fixed;
      left: 0;
      top: 30%;
      max-width: 60vw;
      height: 100%;

      border-top-right-radius: 15px;

      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;

      background-color: inherit;
      padding: 1rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(-100%)`};
    }
  `,
  Item: styled.li`
    width: 100%;
    padding: 0;
    margin: 0;
    ${Flex}
    justify-content: flex-start;
    gap: 10px;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    background-color: inherit;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    color: var(--white-mid);
    &:hover {
      background-color: var(--osmoverse-500);
      color: ver(--white-emphasis);
    }
    &:active {
      background-color: var(--osmoverse-500);
      color: var(--white-high);
    }
    a {
      padding: 0;
      margin: 0;
      text-decoration: none;
      border: none;
      &:hover {
        color: ver(--white-emphasis);
      }
      &:active {
        color: var(--white-high);
      }
    }
    @media only screen and (max-width: 40em) {
      padding: 1rem 2rem;
      // border-radius: 15px;
      // background-color: var(--osmoverse-500);
    }
  `,

  LinkStyle: {
    width: "100%",
  },
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;

    display: none;

    img {
      // transform: rotate(270deg);
      height: 100%;
      // max-height: 100px;
    }
    @media only screen and (max-width: 40em) {
      display: flex;
      justify-content: center;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    border-radius: 15px;
    background-color: var(--osmoverse-600);

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
};

function StyledNavbar() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Navbar.Wrapper>
      <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
        <img src={burgermenu} alt="nav menu" />
      </HamburgerButton.Wrapper>
      <Navbar.Text>
        <h2>
          Powered by <br />
          <a href="https://pecuniafinance.com" rel="noreferrer" target="_blank">
            🟣Pecunia.Finance
          </a>
        </h2>
      </Navbar.Text>
      <Navbar.Logo src={logo} alt="logo" />
      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        <Link to="/" style={Navbar.LinkStyle}>
          <Navbar.Item>
            <HiHome size="20" />
            Home
          </Navbar.Item>
        </Link>
        <Link to="/install" style={Navbar.LinkStyle}>
          <Navbar.Item>
            <RiInstallFill size="20" />
            Install
          </Navbar.Item>
        </Link>
        <Link to="/setup" style={Navbar.LinkStyle}>
          <Navbar.Item>
            <FaHatWizard size="20" />
            Setup
          </Navbar.Item>
        </Link>
        <Link to="/run" style={Navbar.LinkStyle}>
          <Navbar.Item>
            <IoIosCreate size="20" />
            Run
          </Navbar.Item>
        </Link>
        <Link to="/technical" style={Navbar.LinkStyle}>
          <Navbar.Item>
            <BsClipboard2DataFill size="20" />
            Technical
          </Navbar.Item>
        </Link>
      </Navbar.Items>
      <Navbar.Text className="credit">
        <h2>
          Powered by <br />
          <a href="https://pecuniafinance.com" rel="noreferrer" target="_blank">
            🟣Pecunia.Finance
          </a>
        </h2>
      </Navbar.Text>
    </Navbar.Wrapper>
  );
}

export default StyledNavbar;
