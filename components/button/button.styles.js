import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: #f09b00;
  color: black;
  font-size: 1.1rem;
  padding: 20px 60px;
  border-radius: 2.5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #ba7800;
  }
`;
