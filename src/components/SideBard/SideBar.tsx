import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  NavBar,
  WelcomeText,
  NavLinks,
  SubmenuItem,
  NavItemWithSubMenu,
  LogoutButton,
  Submenu,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {fetchUserType } from "../../Pages/utils/apiUtils";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL;

const SideBar = () => {
  const navigate = useNavigate();
const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAlunosSubMenu, setShowAlunosSubMenu] = useState(false);
  const [showTurmasSubMenu, setShowTurmasSubMenu] = useState(false);
  const [showUsuariosSubMenu, setShowUsuariosSubMenu] = useState(false);
 

  const userType = localStorage.getItem("userType");
  const userName = localStorage.getItem("UserName");

  useEffect(() => {
    fetchUserType().then(({ isAuthenticated }) => {
      setIsAuthenticated(isAuthenticated);
    });
  }, []);
  const handleLogout = () => {
    try {
      localStorage.clear();
      axios.post(`${apiUrl}/logout`);
      navigate("/");
      toast.success("Logout realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <>
      <NavBar>
        <NavLinks>
          <NavItemWithSubMenu
            title="Pagina Inicial"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
       Pagina Inicial
          </NavItemWithSubMenu>
          <NavItemWithSubMenu
            title="Cadastrar dispositivo"
            onClick={() => {
              navigate("/cadastrar-dispositivo");
            }}
          >
           Cadastrar Dispositivo
          </NavItemWithSubMenu>
          <SubmenuItem  to="/dashboard/meus-dispositivos"
           
         
          >
            Meu Dispositivos
           
          </SubmenuItem>



       
        </NavLinks>
        <WelcomeText>
       
        </WelcomeText>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </NavBar>
    </>
  );
};

export default SideBar;
