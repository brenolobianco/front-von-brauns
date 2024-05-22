import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectRoute = () => {
  const token = localStorage.getItem("@Devices:token");


  if (!token) {
    // Se não houver token, redireciona para a página inicial
    toast.error("Acesso negado, por favor realize o login");
    return <Navigate to="/" />;
  }


  // Caso contrário, permite o acesso ao conteúdo protegido
  return <Outlet />;
};

