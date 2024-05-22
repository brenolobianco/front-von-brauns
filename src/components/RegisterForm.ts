import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const RegisterForm = styled.form`
  width: 80%;
  max-width: 650px;
 
  background: rgba(255, 255, 240, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 21px;

  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: 0 8px 20px 0;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  color: black;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    padding: 25px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.4rem;
  width: 90%;
  max-width: 600px;
  padding: 14px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem white;
    backdrop-filter: blur(12rem);
  }

  &::placeholder {
    color: #3c354e;
    font-weight: 100;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InputImage = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 90%;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 15px;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }

  &::placeholder {
    color: #3c354e;
    font-weight: 100;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Select = styled.select`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.4rem;
  width: 90%;
  max-width: 600px;
  padding: 14px;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem white;
    backdrop-filter: blur(12rem);
  }

  &::placeholder {
    color: #3c354e;
    font-weight: 100;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Option = styled.option`
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
`;

export const Label = styled.label`
  color: #3c354e;
  font-size: 12px;
  width: 50%;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LabelInput = styled.label`
  color: #3c354e;
  font-size: 12px;
  display: flex;
  font-weight: bold;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  max-width: 400px;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonNavigate = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 285, 0.15);
  padding: 1rem;
  border-radius: 2rem;
  width: 65%;
  max-width: 400px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
