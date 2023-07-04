import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(100deg, #673ab7, #934545);
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
  width: 20rem;
`;

export const SubmitButton = styled.button`
  background-image: linear-gradient(100deg, #673ab7, #934545);
  color: white;
  border-radius: 30px;
  font-size: 1.1rem;
  padding-block: 1rem;
  font-weight: 600;
  border: none;
  transition: all 200ms linear;
  &:hover {
    scale: 1.1;
    cursor: pointer;
    box-shadow: 5px 3px 7px grey;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  &::placeholder {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  margin-block: 0;
  text-align: center;
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -1px;
`;

export const ForgotPassword = styled(Link)`
  align-self: flex-end;
`;
