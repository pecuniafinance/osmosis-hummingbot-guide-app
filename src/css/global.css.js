import styled, { css } from "styled-components";

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Page = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    ${Flex}
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    gap: 20px;
    padding: 20px 0px;
    @media (max-width: 800px) {
      padding-bottom: 180px;
    }
  `,
  Wrapper: styled.div`
    min-width: 50vw;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 25px;
    background-color: var(--osmoverse-850);
    color: var(--white-high);
    text-align: left;
    text-wrap: wrap;
    padding: 1% 3%;
    a {
      color: var(--ammelia-600);
    }
    img {
      border-radius: 6px;
    }
  `,
};
