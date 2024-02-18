import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import burgermenu from "../imgs/menu-icon-test-tubes.png";
import logo from "../imgs/logo192.png";
import "../global.css";

const Navbar = {
  Wrapper: styled.nav`
    width: auto;
    padding: 1rem 3rem;
    max-height: 20vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--osmoverse-800);

    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      bottom: 0;
    }
  `,
  Logo: styled.img`
    height: 80px;
  `,

  Text: styled.div`
    display: none;
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
      img {
        max-height: 60%;
        width: auto;
      }
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      left: 0;
      top: 20%;

      height: 100%;

      border-top-right-radius: 15px;

      flex-direction: column;
      gap: 20px;

      background-color: inherit;
      padding: 1rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(-100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 2rem;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      padding: 1rem 2rem;
      border-radius: 15px;
      background-color: var(--osmoverse-500);
    }
  `,
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
          🟣Pecunia.Finance
        </h2>
      </Navbar.Text>
      <Navbar.Logo src={logo} alt="logo" />
      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
        <Navbar.Item>
          <Link to="/">Home</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/install">Install</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/setup">Setup</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/create-strategy">Run</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/technical">Technical</Link>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
}

export default StyledNavbar;
