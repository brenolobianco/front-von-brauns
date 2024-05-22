import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const ColumnContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Mudança para começar o conteúdo no topo
  align-items: center;
  padding: 20px;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export const ColumnTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const DeviceListContainer = styled.div`
  display: flex;
  flex-direction: column; // Alterado para coluna para melhor acomodar os cartões
  justify-content: flex-start; // Ajuste para alinhar itens ao topo
  align-items: center;
  width: 100%; // Utiliza toda a largura do contêiner pai
  max-width: 600px; // Limita a largura máxima para evitar que fique muito largo em telas grandes
  height: auto; // Ajusta altura automaticamente baseada no conteúdo
  padding: 10px;
  background-color: #ffffff; // Cor de fundo mais neutra
  overflow: auto;
  gap: 10px;
  border-radius: 8px; // Adiciona bordas arredondadas para um look mais suave
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra sutil para profundidade
`;

export const DeviceCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  height: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 70%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 20px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;


 