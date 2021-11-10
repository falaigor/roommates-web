import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 3.8rem;
  display: flex;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333340);

  @media only screen and (max-width: 1024px) {
    z-index: 999;
    position: fixed;
    align-items: center;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  font-size: 1.4em;
`;

export const Button = styled(Link)`
  width: 100%;
  max-width: 10rem;
  height: 2.6rem;
  background: var(--blue);
  border-radius: 0.4rem;
  color: var(--white);
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;

  position: relative;
  z-index: 2;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--dark-blue);
  }
`;
