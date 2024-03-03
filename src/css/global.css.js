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
    padding-top: 20px;
    @media (max-width: 800px) {
      padding-bottom: 150px;
    }
  `,
  Wrapper: styled.div`
    min-width: 50vw;
    max-width: 95%;
    // min-height: 400px;
    ${Flex}
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 50px;
    background-color: var(--osmoverse-850);
    // margin: auto;
    color: var(--white-high);
    text-align: left;
    text-wrap: wrap;
    padding: 10px 20px;
    a {
      color: var(--ammelia-600);
    }
    code {
      white-space: wrap;
      @media (max-width: 800px) {
        font-size: 10px;
      }
    }
  `,
};
