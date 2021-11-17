import { Tooltip } from "react-leaflet";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const RoommatesMapWrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--white);
`;

export const RoommatesMapContent = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 2fr;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-grid-template-rows: 50% 50%;
    grid-template-areas:
      "map"
      "rooms";
    gap: 2rem;
    padding: 0;
  }
`;

export const Rooms = styled.div`
  width: 100%;
  height: 88vh;
  padding: 0 2rem;
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: var(--gray);
  }

  @media only screen and (max-width: 1024px) {
    height: 52vh;
    grid-area: rooms;
  }
`;

export const Room = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333315);

  margin: 0 0 2rem 0;
  display: flex;

  img {
    width: 150px;
    height: 150px;
    border-radius: 0.4rem;

    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`;

export const Title = styled.h3``;

export const Description = styled.div`
  color: var(--gray);
  font-size: 0.9rem;
`;

export const Address = styled.p`
  font-size: 0.9rem;
`;

export const Price = styled.h3`
  span {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export const Map = styled.div`
  width: 2fr;
  height: 88vh;
  border-radius: 0.6rem;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333315);
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    height: 45vh;
    grid-area: map;
  }

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

export const Image = styled(Link)`
  cursor: pointer;
  position: relative;

  div {
    width: 150px;
    height: 150px;
    top: 0;
    position: absolute;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    text-align: center;
    border-radius: 0.4rem;
    font-family: "DM Sans", sans-serif !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    :hover {
      opacity: 1;
    }
  }
`;
