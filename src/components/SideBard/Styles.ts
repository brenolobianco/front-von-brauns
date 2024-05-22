import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #2c3e50;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  color: #ecf0f1;
  transition: width 0.3s ease;

 
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 150px;
  font-size: 18px;
  padding: 10px;
`;

export const Submenu = styled.div`
  background-color: #34495e;
  border: 1px solid #7f8c8d;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  font-size: 16px;
  margin-top: 10px;
`;

export const NavItemWithSubMenu = styled.div`
  position: relative;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

export const SubmenuItem = styled(Link)`
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  padding: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1abc9c;
  }
`;

export const LogoutButton = styled.button`
  background-color: #e74c3c;
  color: #ecf0f1;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const WelcomeText = styled.span`
  font-weight: bold;
  color: #ecf0f1;
  margin: 20px 10px;
  font-size: 16px;
`;