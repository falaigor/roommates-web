import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  max-width: 1480px;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  h1 {
    font-size: 6rem;
    line-height: 5rem;
    margin-bottom: 4rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const Button = styled(Link)`
  width: 100%;
  max-width: 14rem;
  height: 3.8rem;
  background: var(--blue);
  border-radius: 0.4rem;
  color: var(--white);
  font-size: 1.15rem;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--dark-blue);
  }
`;
