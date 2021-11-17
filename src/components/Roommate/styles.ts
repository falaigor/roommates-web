import styled from "styled-components";
import { Tooltip } from "react-leaflet";

export const RoomWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
`;

export const RoomContent = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 2rem auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

export const Map = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 0.6rem;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333315);
  overflow: hidden;

  &.leaflet-tooltip {
    position: absolute;
    padding: 6px;
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #222;
    white-space: nowrap;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    box-shadow: 0 1px 3px rgb(0 0 0 / 40%);
  }
`;

export const NewTooltip = styled(Tooltip)`
  font-size: 1rem !important;
  font-family: "DM Sans", sans-serif !important;
  background: transparent !important;
  border: none !important;
  color: var(--white) !important;
  box-shadow: none !important;

  ::before {
    border-right-color: #fff0 !important;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  background: #ffffff;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.4rem;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;
  margin: 16px 0;

  button {
    border: 0;
    height: 100px;
    background: none;
    cursor: pointer;
    border-radius: 0.4rem;
    overflow: hidden;
    outline: none;
    opacity: 0.6;
    &.active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "DM Sans", sans-serif;
`;

export const Button = styled.div`
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
