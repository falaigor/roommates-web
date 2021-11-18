import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 3.8rem;
  display: flex;
  background: var(--white);
  position: fixed;

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

  strong {
    color: var(--blue);
  }
`;

export const Button = styled.a`
  width: 100%;
  max-width: 8rem;
  height: 2.6rem;
  background: var(--white);
  border: 2px solid var(--blue);
  border-radius: 0.4rem;
  color: var(--blue);
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;

  position: relative;
  z-index: 2;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--white);
    background: var(--dark-blue);
  }
`;

export const ButtonLogout = styled.button`
  width: 100%;
  max-width: 8rem;
  height: 2.6rem;
  background: var(--white);
  border: 2px solid var(--blue);
  border-radius: 0.4rem;
  color: var(--blue);
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;

  position: relative;
  z-index: 2;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--white);
    background: var(--dark-blue);
  }
`;
