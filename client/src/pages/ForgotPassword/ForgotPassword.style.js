import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  display: flex;
  height: 2rem;
  outline: none;
  padding: 8px;
  font-size: 17px;
  border: 1px solid black;
  border-radius: 14px !important;
  &::placeholder {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 1px 0px 20px black;
  background-color: white;
  gap: 15px;
  width: 25rem;
  height: 18.5rem;
`;

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      217deg,
      rgba(0, 255, 159, 0.8),
      rgb(165 43 43 / 0%) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 184, 255, 0.8), rgba(0, 30, 255, 0) 70.71%),
    linear-gradient(358deg, rgba(189, 0, 255, 0.8), rgba(214, 0, 255, 0) 70.71%);
  background-position: top center;
  animation: ${HeaderKeyFrame} 4500ms ease infinite;
  background-size: 200% 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

export const ResetPasswordButton = styled.button`
  background-color: #e4e4e4;
  color: black;
  border-radius: 30px;
  font-size: 1.3rem;
  padding-block: 1rem;
  font-weight: 600;
  border: none;
  transition: all 200ms linear;
  margin-top: 1.2rem;
  &:hover {
    scale: 1.05;
    cursor: pointer;
    box-shadow: 0px 0px 9px grey;
  }
`;

export const AlignH1 = styled.h1`
  margin: 0px;
`;

export const Alignp = styled.p`
  line-height: 0px;
  margin-top: 0px;
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  flex-direction: row;
  justify-content: center;
  background: none;
  margin-top: 12px;
  outline: none;
  font-size: 1.2rem;
  border: none;
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: grey;
  }
`;
