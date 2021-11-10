import { Tooltip } from "react-leaflet";
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
`;

export const Room = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333315);

  margin: 0 0 2rem 0;
  display: flex;

  cursor: pointer;

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
