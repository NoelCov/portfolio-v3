import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  background-color: #121212;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 8vw;
  }

  @media screen and (max-width: 550px) {
    padding: 0 5vw;
    min-height: 70vh;
  }
`;
