import styled from "styled-components";

export const ButtonContainer = styled.div`
  border: 1px solid #2b79a2;
  color: #bcbdd0;
  padding: 20px 55px;
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    border-color: #bcbdd0;
  }

  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
