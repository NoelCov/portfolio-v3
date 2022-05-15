import styled from "styled-components";

export const ProjectContainer = styled.div `
  width: 100%;
  margin: 0 auto;
  display: block;
  height: auto;
  align-items: center;
`;

export const ProjectImageContainer = styled.div `
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.9;
  margin: 0 auto;
  width: 75%;

  :hover {
    transform: scale(1.03);
    opacity: 1;
  }

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const ProjectContentContainer = styled.div `
  margin: 30px auto;
  width: 65%;
  gap: 40px;
  padding: 80px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 1200px) {
    gap: 20px;
    width: 80%;
    padding: 40px 25px;

  }

  @media screen and (max-width: 900px) {
    width: 85%;
    padding: 20px 25px;
    min-height: 280px;
  }

  @media screen and (max-width: 550px) {
    border-top: none;
    gap: 20px;
    margin: 0 auto;
    padding: 25px;
  }
`;

export const ProjectTitle = styled.h3 `
  margin: 0;
  color: teal;
  font-size: 2rem;

  @media screen and (max-width: 1200px) {
   font-size: 1.8rem; 
  }

  @media screen and (max-width: 900px) {
   font-size: 1.5rem; 
  }

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
export const ProjectText = styled.p `
  margin: 0;
`;

export const ProjectToolsContainer = styled.div `
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

export const ProjectTool = styled.p `
  margin: 0;
  color: teal;
`;