import styled from "styled-components";

export const HowItWorksWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 5rem 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-family: "DM Sans", sans-serif;
`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 550px;
  text-align: center;
  font-family: "DM Sans", sans-serif;
`;

export const Works = styled.div`
  width: 100%;
  margin: 5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const WorksItem = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background-color: var(--white);
  padding: 3rem 1rem;

  .description {
    width: 100%;
    max-width: 250px;
    font-size: 1.6rem;
    text-align: center;
    font-family: "DM Sans", sans-serif;
  }
`;
