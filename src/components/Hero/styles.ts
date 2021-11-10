import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 700px;

  div {
    width: 100%;
    height: 700px;
    position: relative;
    background: rgb(250, 250, 250);
    clip-path: polygon(0% 0%, 100% 0, 100% 94%, 50% 100%, 0 94%);
    z-index: 1;

    img {
      width: 100%;
      height: 700px;
      object-fit: cover;
    }

    @media only screen and (max-width: 1024px) {
      height: 550px;
    }
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
  font-family: "DM Sans", sans-serif;
  top: -30px;
  position: relative;
  z-index: 2;
  transition: all 0.2s ease;
  filter: drop-shadow(0 0 0.75rem #333);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--dark-blue);
  }

  @media only screen and (max-width: 1024px) {
    top: -180px;
  }
`;
