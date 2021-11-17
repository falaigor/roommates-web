import styled from "styled-components";

export const RoommatesMapWrapper = styled.section`
  width: 100%;
  height: auto;
  background: var(--white);
`;

export const RoommatesFormContent = styled.form`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 2fr;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RoomForm = styled.div`
  width: 100%;
  height: 84vh;
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
    margin-top: 4rem;
    height: auto;
  }
`;

export const Map = styled.div`
  width: 2fr;
  height: 80vh;
  border-radius: 0.6rem;
  background: var(--white);
  filter: drop-shadow(0 0 0.75rem #33333315);
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    height: 50vh;
  }
`;

export const TitleMap = styled.h3`
  font-family: "DM Sans", sans-serif;
  padding: 2rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 1rem 2rem;
  }
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

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InputBlockMobile = styled(InputBlock)`
  padding: 0 2rem;
`;

export const ButtonMobile = styled.button`
  @media only screen and (min-width: 1024px) {
    display: none;
  }

  margin-top: 4px;
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
