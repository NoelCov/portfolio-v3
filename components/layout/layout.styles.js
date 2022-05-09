import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  background-color: #161923;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 10vw;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 8vw;
    height: auto;
  }

  @media screen and (max-width: 550px) {
    padding: 5vh 3vw;
  }
`;
