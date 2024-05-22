import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #2c5a50;
  color: black;
  padding: 20px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 0px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    color: white;
  }


`;

export const LoginForm = styled.form`
  width: 292px;
font-size: 2.5rem;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-shadow: 0 8px 32px 0 rgba(31, 30, 135, 0.37);
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: #333333;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  border: 1px solid #cccccc;
  outline: none;
  color: #333333;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    box-shadow: 0 0 0 0.2rem #b9abe0;
    border-color: #666666;
  }

  &::placeholder {
    color: #999999;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: #333333;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555555;
  }
`;

export const ButtonNavigate = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 2rem;
  width: 100%;
  color: #333333;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;
`;