import { Form } from "@unform/web";
import styled from "styled-components";

export const RoommatesMapWrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--white);
`;

export const RoommatesMapContent = styled(Form)`
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

  img {
    width: 150px;
    border-radius: 0.4rem;
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
`;

export const InputBlock = styled.div`
  margin-top: 24px;

  label {
    display: flex;
    color: var(--black);
    margin-bottom: 8px;
    line-height: 24px;
    font-family: "DM Sans", sans-serif;
  }

  input,
  textarea {
    width: 100%;
    background: #fdfdfd;
    border: 1px solid var(--light-blue);
    border-radius: 0.4rem;
    color: var(--black);
    font-family: "DM Sans", sans-serif;
  }

  input {
    height: 64px;
    font-size: 1rem;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    font-size: 1rem;
    line-height: 28px;
  }

  &.new-image {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="file"] {
    visibility: hidden;
    height: 0px;
  }

  &.button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      height: 64px;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      color: #5c8599;
      cursor: pointer;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 64px;
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: var(--blue);
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  font-size: 1.1rem;
  font-family: "DM Sans", sans-serif;

  :hover {
    background: var(--dark-blue);
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);

  color: var(--white);
  font-size: 1.2rem;
  font-family: "DM Sans", sans-serif;

  div {
    margin-top: -8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
