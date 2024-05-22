import styled from 'styled-components';

// Container da página principal
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

// Container do conteúdo principal
export const ContentContainer = styled.div`
  width: 50%;
  max-width: 1200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Container para listas
export const ListContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

// Cabeçalho da lista
export const ListHeader = styled.div`
  background-color: #f8f8f8;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  h2 {
    margin: 0;
    font-size: 20px;
  }
`;

// Item da lista
export const ListItem = styled.div`
  padding: 20px;
  width:400px ;
  p {
    margin: 5px 0;
  }
`;

// Botão padrão
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #0056b3;
  }
`;

// Paginação
export const Pagination = styled.div`
  margin-top: 20px;
  .pagination {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  .page-item {
    margin: 0 5px;
  }
  .page-link {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  .page-item.active .page-link {
    background-color: #007bff;
    color: white;
  }
`;

// Modal para seleção de comandos
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Lista de comandos no modal
export const CommandList = styled.div`
  margin: 20px 0;
`;

// Item de comando no modal
export const CommandItem = styled.div`
  margin-bottom: 10px;
  label {
    cursor: pointer;
  }
`;

// Card para cada dispositivo no dashboard
export const DeviceCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  h2 {
    margin: 0 0 10px;
  }
`;

// Resultado do comando no dashboard
export const CommandResult = styled.div`
  margin-top: 10px;
  strong {
    display: block;
    margin-bottom: 5px;
  }
  span {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 4px;
    display: block;
  }
`;
