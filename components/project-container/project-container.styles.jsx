import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;

  :nth-of-type(odd) {
    flex-flow: row-reverse;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column !important;
    height: auto;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 60%;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.9;

  :hover {
    transform: scale(1.03);
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ProjectContentContainer = styled.div`
  width: 45%;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 900px) {
    width: 95%;
    min-height: 280px;
    padding: 20px;
    gap: 40px;
  }

  @media screen and (max-width: 550px) {
    border-top: none;
    gap: 30px;
    width: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  color: teal;
  font-size: 1.5rem;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
export const ProjectText = styled.p`
  margin: 0;
  padding: 0 30px;
  font-size: 1.2rem;

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`;

export const ProjectToolsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 900px) {
    gap: 30px;
  }

  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 5px;
  }
`;

export const ProjectTool = styled.p`
  margin: 0;
  color: teal;
  font-size: 1rem;
`;

export const ViewProjectLink = styled.a`
  font-size: 0.8rem;
  background-color: orange;
  color: black;
  padding: 15px 50px;
  transition: 300ms;

  &:hover {
    background-color: #ba7800;
  }

  @media screen and (max-width: 900px) {
    padding: 15px 40px;
  }

  @media screen and (max-width: 550px) {
    padding: 10px 30px;
  }
`


