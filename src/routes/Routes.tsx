import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectRoute} from "./ProtectedRoute";
import Dashboard from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";

import RegisterClass from "../Pages/Classes/RegisterClass/RegisterDevice";


import ListDevices from "../Pages/Classes/ListDevices/ListDevices";

export const RoutesMain = () => {
  return (
    <Routes>
      {/* Rotas comuns para ambos os tipos de usuário */}

      <Route path="/" element={<Login />} />

      {/* Rota de proteção para páginas restritas */}
      <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastrar-dispositivo" element={<RegisterClass />} />
        <Route path="/dashboard/meus-dispositivos" element={<ListDevices />} />
   
  
        
         
        
      
      </Route>
    </Routes>
  );
};
